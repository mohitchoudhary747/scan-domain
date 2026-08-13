// External file version - the initiator call stack for cookies set here
// will correctly include this file's URL and line number, unlike the
// inline <script> blocks in cookie-initiator-repro.html.
document.cookie = "tracker_client_id=" + Date.now() + "; path=/; SameSite=Lax";
document.cookie = "tracker_session=" + Math.random().toString(36).slice(2) + "; path=/; SameSite=Lax";
