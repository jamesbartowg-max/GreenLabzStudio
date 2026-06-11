$html = Get-Content 'C:\Users\James\.gemini\antigravity\brain\9159f95a-45ff-44da-b5bf-73d8472037ca\.system_generated\steps\3142\content.md' -Raw
if ($html -match '(?s)<section class="faq".*?</section>') {
    $matches[0] | Out-File 'C:\Users\James\Desktop\GL-Finalsteps\wibify_faq.html' -Encoding utf8
}
if ($html -match '(?s)<footer.*?</footer>') {
    $matches[0] | Out-File 'C:\Users\James\Desktop\GL-Finalsteps\wibify_footer.html' -Encoding utf8
}
