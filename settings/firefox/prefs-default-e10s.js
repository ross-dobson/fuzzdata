user_pref("app.update.enabled", false);
user_pref("app.update.stage.enabled", false); // domfuzz
user_pref("app.update.staging.enabled", false);
user_pref("app.update.url.android", ""); // domfuzz
user_pref("browser.EULA.override", true);
user_pref("browser.aboutHomeSnippets.updateUrl", "nonexistent://test"); // domfuzz
user_pref("browser.addon-watch.interval", -1); // domfuzz
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.chrome.favicons", false);
user_pref("browser.chrome.site_icons", false);
user_pref("browser.displayedE10SNotice", 5);
user_pref("browser.dom.window.dump.enabled", true); // Prints messages to the (native) console
user_pref("browser.firstrun.show.localepicker", false);
user_pref("browser.firstrun.show.uidiscovery", false);
user_pref("browser.newtabpage.directory.ping", ""); // domfuzz
user_pref(
  "browser.newtabpage.directory.source",
  'data:application/json,{"testing":1}'
); // domfuzz
user_pref("browser.newtabpage.enhanced", false); // domfuzz
user_pref("browser.newtabpage.introShown", true); // domfuzz
user_pref("browser.newtabpage.updateIntroShown", true); // domfuzz
user_pref("browser.offline-apps.notify", false);
user_pref("browser.pageThumbs.enabled", false); // domfuzz
user_pref("browser.pagethumbnails.capturing_disabled", true); // domfuzz
user_pref("browser.reader.detectedFirstArticle", true); // domfuzz
user_pref("browser.rights.3.shown", true);
user_pref("browser.rights.override", true); // domfuzz
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.region", "US"); // Required for WebPayments
user_pref("browser.search.suggest.enabled", false); // domfuzz
user_pref("browser.search.suggest.prompted", true); // needed on Android
user_pref("browser.search.update", false);
user_pref("browser.sessionhistory.max_entries", 0);
user_pref("browser.sessionhistory.max_total_viewers", 0);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.snippets.enabled", false); // domfuzz
user_pref("browser.snippets.firstrunHomepage.enabled", false); // domfuzz
user_pref("browser.snippets.syncPromo.enabled", false); // domfuzz
user_pref("browser.ssl_override_behavior", 1); // domfuzz
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.page", 0); // use about:blank
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true); // domfuzz
user_pref("browser.warnOnQuit", false); // domfuzz
user_pref("browser.webapps.checkForUpdates", 0);
user_pref("canvas.customfocusring.enabled", true);
user_pref("canvas.hitregions.enabled", true);
// user_pref("canvas.imagebitmap_extensions.enabled", true);
user_pref("captivedetect.canonicalURL", "");
user_pref("clipboard.autocopy", true); // Ensures pref is enabled on Windows and OSX
user_pref("csp.skip_about_page_has_csp_assert", true); // suggested in bug 1503956 to avoid FPs
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.service.firstRun", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 2);
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true); // domfuzz
user_pref("devtools.selfxss.count", 999);
user_pref("dom.archivereader.enabled", true);
user_pref("dom.allow_scripts_to_close_windows", true);
user_pref("dom.always_stop_slow_scripts", true); // domfuzz
user_pref("dom.disable_open_during_load", false); // Popup blocker behavior - Required for Grizzly harness
user_pref("dom.disable_window_move_resize", false);
user_pref("dom.disable_window_flip", false); // Determines whether windows can be focus()ed via non-chrome JavaScript
user_pref("dom.disable_window_status_change", false); // text in the browser status bar may be set by non-chrome JavaScript
user_pref("dom.datastore.enabled", true);
user_pref("dom.experimental_forms", true);
user_pref("dom.fetch.enabled", true);
user_pref("dom.flyweb.enabled", true);
user_pref("dom.icc.enabled", true);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);
user_pref("dom.identity.enabled", true);
user_pref("dom.image.picture.enabled", true);
user_pref("dom.image.srcset.enabled", true);
user_pref("dom.imagecapture.enabled", true);
user_pref("dom.indexedDB.experimental", true);
user_pref("dom.max_chrome_script_run_time", 0);
user_pref("dom.max_child_script_run_time", 0);
user_pref("dom.max_script_run_time", 0);
user_pref("dom.min_background_timeout_value", 4);
user_pref("dom.payments.request.enabled", true);
user_pref("dom.presentation.enabled", true);
user_pref("dom.send_after_paint_to_content", true); // needed when using IMGCorpman with MozAfterPaint event
user_pref("dom.server-events.enabled", true);
user_pref("dom.successive_dialog_time_limit", 0); // domfuzz
user_pref("dom.vr.enabled", true);
user_pref("dom.vr.test.enabled", true);
user_pref("dom.vr.puppet.enabled", true);
user_pref("dom.vr.require-gesture", false);
user_pref("dom.vr.poseprediction.enabled", false);
user_pref("dom.webcomponents.enabled", true);
user_pref("extensions.allow-non-mpc-extensions", true); // Required to load fuzzPriv
user_pref("extensions.autoDisableScopes", 0); // domfuzz
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.enabledScopes", 5); // domfuzz
user_pref("extensions.getAddons.cache.enabled", false); // domfuzz
user_pref("extensions.installDistroAddons", false); // domfuzz
user_pref("extensions.showMismatchUI", false); // domfuzz
user_pref("extensions.testpilot.runStudies", false);
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.notifyUser", false); // domfuzz
user_pref("fuzzing.enabled", true); // support for FuzzingFunctions
user_pref("full-screen-api.allow-trusted-requests-only", false);
user_pref("full-screen-api.warning.timeout", 500);
user_pref("gecko.handlerService.allowRegisterFromDifferentHost", true);
user_pref("general.useragent.updates.enabled", false); // domfuzz
user_pref("general.warnOnAboutConfig", false);
user_pref("geo.enabled", false);
//user_pref("gfx.blocklist.all", -1); // force unblock gfx cards
//user_pref("gfx.canvas.azure.accelerated", true); // No value in fuzzing this anymore (lsalzman)
user_pref("gfx.color_management.enablev4", true);
user_pref("gfx.color_management.mode", 1); // 0=off, 1=full, 2=tagged images only
user_pref("gfx.content.use-native-pushlayer", true);
user_pref("gfx.downloadable_fonts.keep_variation_tables", true);
user_pref("gfx.downloadable_fonts.otl_validation", false); // required for some demo fonts
user_pref("gfx.offscreencanvas.enabled", false);
user_pref("gfx.prefer-mesa-llvmpipe", false);
user_pref("html5.offmainthread", true);
user_pref("image.animated.decode-on-demand.batch-size", 1);
user_pref("image.animated.decode-on-demand.threshold-kb", 0);
user_pref("image.high_quality_downscaling.enabled", false);
user_pref("image.high_quality_downscaling.min_factor", 1000);
user_pref("image.cache.size", 0);
user_pref("image.multithreaded_decoding.limit", 1);
user_pref("image.webp.enabled", true);
user_pref("javascript.options.gczeal", 0); // domfuzz
user_pref("layers.acceleration.force-enabled", true);
user_pref("layout.accessiblecaret.enabled", true); // normally enabled on devices with touchscreens (emilio)
user_pref("layout.css.column-span.enabled", true); // requested in bug 1491723
user_pref("layout.css.font-variations.enabled", true);
user_pref("layout.css.individual-transform.enabled", true); // requested in bug 1507647
user_pref("layout.css.moz-document.content.enabled", true); // Enable @-moz-document
user_pref("layout.css.ruby.enabled", true);
user_pref("layout.css.vertical-text.enabled", true);
user_pref("layout.debug.enable_data_xbl", true);
user_pref("lightweightThemes.update.enabled", false);
user_pref("media.apple.mp3.enabled", true);
user_pref("media.apple.mp4.enabled", true);
user_pref("media.audio_data.enabled", true);
user_pref("media.autoplay.ask-permission", false);
user_pref("media.autoplay.default", 0); // 0=Allowed, 1=Blocked, 2=Prompt
user_pref("media.autoplay.enabled.user-gestures-needed", false);
user_pref("media.av1.enabled", true);
user_pref("media.av1.use-dav1d", true);
user_pref("media.eme.enabled", true);
user_pref("media.getusermedia.screensharing.allowed_domains", "localhost");
user_pref("media.getusermedia.browser.enabled", true);
user_pref("media.getusermedia.audiocapture.enabled", true);
//user_pref("media.forcestereo.enabled", true);
user_pref("media.fragmented-mp4.enabled", true);
user_pref("media.fragmented-mp4.exposed", true);
user_pref("media.fragmented-mp4.ffmpeg.enabled", true);
user_pref("media.fragmented-mp4.gmp.enabled", true);
user_pref("media.fragmented-mp4.use-blank-decoder", true);
user_pref(
  "media.gmp-manager.url.override",
  "http://127.0.0.1:6/dummy-gmp-manager.xml"
); // domfuzz
user_pref("media.getusermedia.screensharing.enabled", true);
user_pref("media.mediasource.allow_init_moov", true);
user_pref("media.mediasource.ignore_codec", true);
user_pref("media.mediasource.webm.enabled", true);
user_pref("media.mediasource.youtubeonly", false);
user_pref("media.navigator.permission.disabled", true);
user_pref("media.navigator.video.red_ulpfec_enabled", true);
user_pref("media.num-decode-threads", 1);
user_pref("media.peerconnection.remoteTrackId.enabled", true);
user_pref("media.ogg.enabled", true);
user_pref("media.peerconnection.aec", 1); // domfuzz
user_pref("media.peerconnection.aec_enabled", true); // domfuzz
user_pref("media.peerconnection.agc", 1); // domfuzz
user_pref("media.peerconnection.agc_enabled", false); // domfuzz
user_pref(
  "media.peerconnection.default_iceservers",
  '[{"url": "stun:23.21.150.121"}]'
); // domfuzz
user_pref("media.peerconnection.noise", 1); // domfuzz
user_pref("media.peerconnection.noise_enabled", false); // domfuzz
user_pref("media.peerconnection.video.h264_enabled", true);
user_pref("media.raw.enabled", true);
//user_pref("media.resampling.enabled", true);
//user_pref("media.resampling.rate", 49000);
user_pref("media.track.enabled", true);
user_pref("media.use-blank-decoder", false);
user_pref("media.useAudioChannelAPI", true);
user_pref("media.webaudio.enabled", true);
user_pref("media.webspeech.recognition.enable", true);
user_pref("media.webvtt.enabled", true);
user_pref("memory.free_dirty_pages", false);
user_pref("network.http.response.timeout", 1); // max time to wait for connection (default is 300)
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v2", true);
user_pref("network.http.spdy.enabled.v3", true);
user_pref("network.http.spdy.enabled.v3-1", true);
user_pref("network.http.spdy.enabled.http2draft", true);
user_pref("network.http.use-cache", false);
user_pref("network.jar.open-unsafe-types", true); // domfuzz
user_pref("network.manage-offline-status", false); // domfuzz
user_pref("network.network.protocol-handler.external.mailto", false);
user_pref("network.websocket.allowInsecureFromHTTPS", true);
user_pref("network.websocket.delay-failed-reconnects", false);
user_pref("network.websocket.enabled", true);
user_pref("network.prefetch-next", false); // helps keep browser and fuzzer sync'd
user_pref(
  "network.proxy.autoconfig_url",
  "data:text/plain,function FindProxyForURL(url, host) { if (host == 'localhost' || host == '127.0.0.1') { return 'DIRECT'; } else { return 'PROXY 127.0.0.1:6'; } }"
); // domfuzz
user_pref("network.proxy.share_proxy_settings", true); // domfuzz
user_pref("network.proxy.type", 2); // domfuzz
user_pref("network.proxy.use_direct_on_fail", false); // domfuzz
user_pref("nglayout.debug.disable_xul_cache", false);
user_pref("permissions.default.camera", 1);
user_pref("permissions.default.microphone", 1);
user_pref("pdfium.enabled", true);
user_pref("pdfjs.enableWebGL", true);
user_pref("pdfjs.firstRun", false);
user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling", true);
user_pref("pdfjs.previousHandler.preferredAction", 4);
user_pref("plugin.disable", true);
user_pref("plugins.hide_infobar_for_missing_plugin", true);
user_pref("plugins.update.url", "");
user_pref("privacy.trackingprotection.pbmode.enabled", false); // domfuzz
user_pref("security.data_uri.unique_opaque_origin", false);
user_pref("security.default_personal_cert", "Select Automatically");
user_pref("security.OCSP.enabled", 0);
user_pref("security.ssl.enable_false_start", true);
user_pref("security.fileuri.strict_origin_policy", false);
user_pref("security.warn_submit_insecure", false);
user_pref("security.webauth.webauthn", true);
user_pref("security.webauth.webauthn_enable_softtoken", true);
user_pref("security.webauth.webauthn_enable_usbtoken", false);
user_pref("security.webauth.u2f", true);
user_pref("security.webauth.u2f_enable_softtoken", true);
user_pref("security.webauth.u2f_enable_usbtoken", false);
user_pref("startup.homepage_welcome_url", "about:blank");
user_pref("shumway.disabled", true);
user_pref("toolkit.startup.max_resumed_crashes", -1);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.unified", false); // domfuzz
user_pref("view_source.wrap_long_lines", true);
user_pref("webgl.enable-privileged-extensions", true);
user_pref("webgl.enable-draft-extensions", true);
user_pref("webgl.enable-prototype-webgl2", true);
user_pref("webgl.lose-context-on-heap-minimize", false);
user_pref("webgl.prefer-native-gl", false);
user_pref("webgl.shader_validator", true);
user_pref("webgl.verbose", false);
