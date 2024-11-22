var div = document.createElement("div");

div.innerHTML = `
<form class="newsletter-form listmonk-form nl-form cta-form_wrapper" style="text-align: center;" method="post" action="https://mail-signup.cobratate.com" class="listmonk-form">
  <div style="width: 100%;">
    <input type="hidden" name="nonce" />
    <input type="email" name="email" required placeholder="Your email address" class='form-input form-input-large cta-input w-input' /></p>
    <input type="hidden" name="name" placeholder="Name (optional)" />
    
    <input type="hidden" id="ba618" type="checkbox" name="l" checked value="ba618a07-f653-485e-93b1-09bd5e4c0a00" />
    
    <div style="margin-top: 16px;"></div>
    <div class="h-captcha" data-theme="dark" data-sitekey="314ec90e-85df-45bf-9db9-48a9689bf50b"></div>

    <input type="submit" value="Subscribe" class='button-large bg-primary-3 w-button ct_button-primary submit' style="margin-top: 16px; width: 300px;" />
  </div>
</form>
`;

document.currentScript.parentNode.insertBefore(
	div.firstElementChild,
	document.currentScript,
);

const script = document.createElement("script");
script.src = "https://js.hcaptcha.com/1/api.js";
document.body.appendChild(script);
