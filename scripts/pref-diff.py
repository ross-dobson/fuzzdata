#!/usr/bin/env python3
# Todo:
# - sort prefs by value to see what prefs are set to false more easily? you could grep
# - sort prefs by key to make easier to read
# - randomly set boolean prefs
# - show what prefs of file2 are not in file1 ?
import os
import re
import sys
import collections


class Prefs(object):
    def __init__(self, data):
        if not isinstance(data, dict):
            data = dict(data)
        data = sorted(data.items(), key=lambda x: x[0])
        self.data = collections.OrderedDict(data)
        self.size = len(self.data)


class PrefDiffer(object):

    RX_FIND = '"(.+)",\s*(.+)\);'

    def extract(self, data):
        return re.compile(self.RX_FIND).findall(data)

    def read(self, fpath):
        if not os.path.exists(fpath):
            return
        with open(fpath) as fo:
            prefs = Prefs(dict(self.extract(fo.read())))
        return prefs

    def diff(self, fpath1, fpath2):
        prefs1 = self.read(fpath1)
        prefs2 = self.read(fpath2)
        prefs = {}
        for k, v in prefs2.data.items():
            if k in prefs1.data:
                if v != prefs1.data[k]:
                    print('? "{}" exists but is different: {} ({})'.format(Focus.warn(k), prefs1.data[k], v))
                if v == prefs1.data[k]:
                    print('- "{}" exists and is identical: {}'.format(Focus.fail(k), prefs1.data[k]))
            else:
                print('{} {}'.format(Focus.okay('+'), k))
                prefs[k] = v
        return Prefs(prefs)


class Focus(type):
    """
    Utility class for colorizing output on stdout/err.
    """
    COLORS = {
        'info': '\033[1;37m',
        'okay': '\033[92m',
        'warn': '\033[93m',
        'fail': '\033[91m',
        'repr': '\033[35m',
        'none': '\033[0m'
    }

    @staticmethod
    def init():
        if os.sys.platform == 'win32':
            Focus.disable()

    @staticmethod
    def disable():
        Focus.COLORS = dict((k, '') for k, v in Focus.COLORS.items())

    @staticmethod
    def format(color, msg):
        return '{}{}{}'.format(Focus.COLORS[color], msg, Focus.COLORS['none'])

    @staticmethod
    def fail(msg):
        return Focus.format('fail', msg)

    @staticmethod
    def okay(msg):
        return Focus.format('okay', msg)

    @staticmethod
    def warn(msg):
        return Focus.format('warn', msg)

    @staticmethod
    def repr(msg):
        return Focus.format('repr', msg)

    @staticmethod
    def info(msg):
        return Focus.format('info', msg)


if __name__ == "__main__":
    prefs1_name = sys.argv[1]
    prefs2_name = sys.argv[2]

    Focus.init()

    differ = PrefDiffer()
    diff = differ.diff(prefs1_name, prefs2_name)

    print(Focus.fail('\nSummary: {} prefs of "{}" are not included in "{}".'
                     .format(diff.size, prefs2_name, prefs1_name)))
