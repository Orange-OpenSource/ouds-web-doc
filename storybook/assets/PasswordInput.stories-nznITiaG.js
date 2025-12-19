const n={title:"Components/PasswordInput",parameters:{docs:{toc:!0}}},s=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="text-input mb-medium">
  <div class="text-input-container">
    <label for="inputPassword">Password</label>
    <input type="password" id="inputPassword" class="text-input-field" placeholder=" ">
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
</div>
<div class="text-input mb-medium">
  <div class="text-input-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordIcon">Password</label>
    <input type="password" id="inputPasswordIcon" class="text-input-field" placeholder="Minimum 8 characters">
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
</div>
<div class="text-input mb-medium">
  <div class="text-input-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordPrefix">Password</label>
    <div class="input-container" data-bs-prefix="DEV-">
      <input type="password" id="inputPasswordPrefix" aria-describedby="inputPasswordPrefixHelper" class="text-input-field" placeholder=" ">
    </div>
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordPrefixHelper" class="helper-text">Enter a password with at least 8 characters (without the DEV- prefix).</p>
</div>
<div class="text-input mb-medium">
  <div class="text-input-container text-input-container-outlined">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordOutlined">Password</label>
    <input type="password" id="inputPasswordOutlined" aria-describedby="inputPasswordOutlinedHelper" class="text-input-field" placeholder=" ">
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordOutlinedHelper" class="helper-text">Enter a password with at least 8 characters</p>
</div>
 <div class="text-input mb-medium">
  <div class="text-input-container text-input-container-outlined">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordOutlinedValue">Password</label>
    <input type="password" id="inputPasswordOutlinedValue" aria-describedby="inputPasswordOutlinedValueHelper" class="text-input-field" placeholder=" " value="My$ecureP@ssw0rd">
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordOutlinedValueHelper" class="helper-text">Enter a password with at least 8 characters</p>
</div>
<div class="text-input mb-medium">
  <div class="text-input-container">
    <label for="inputPasswordInvalid">Password</label>
    <div class="input-container" data-bs-prefix="DEV-">
      <input type="password" id="inputPasswordInvalid" class="text-input-field is-invalid" aria-describedby="inputPasswordInvalidError" placeholder=" " value="12345">
    </div>
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordInvalidHelper" class="helper-text">Enter a password with at least 8 characters (without the DEV- prefix).</p>
  <p id="inputPasswordInvalidError" class="error-text">Password must be at least 8 characters (without the DEV- prefix).</p>
</div>
<div class="text-input">
  <div class="text-input-container text-input-container-outlined">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordOutlinedInvalid">Password</label>
    <div class="input-container" data-bs-prefix="DEV-">
      <input type="password" id="inputPasswordOutlinedInvalid" class="text-input-field is-invalid" aria-describedby="inputPasswordOutlinedInvalidError" placeholder=" " value="12345">
    </div>
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordOutlinedInvalidHelper" class="helper-text">Enter a password with at least 8 characters (without the DEV- prefix).</p>
  <p id="inputPasswordOutlinedInvalidError" class="error-text">Password must be at least 8 characters (without the DEV- prefix).</p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var e,i,t;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="text-input mb-medium">
  <div class="text-input-container">
    <label for="inputPassword">Password</label>
    <input type="password" id="inputPassword" class="text-input-field" placeholder=" ">
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
</div>
<div class="text-input mb-medium">
  <div class="text-input-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordIcon">Password</label>
    <input type="password" id="inputPasswordIcon" class="text-input-field" placeholder="Minimum 8 characters">
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
</div>
<div class="text-input mb-medium">
  <div class="text-input-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordPrefix">Password</label>
    <div class="input-container" data-bs-prefix="DEV-">
      <input type="password" id="inputPasswordPrefix" aria-describedby="inputPasswordPrefixHelper" class="text-input-field" placeholder=" ">
    </div>
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordPrefixHelper" class="helper-text">Enter a password with at least 8 characters (without the DEV- prefix).</p>
</div>
<div class="text-input mb-medium">
  <div class="text-input-container text-input-container-outlined">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordOutlined">Password</label>
    <input type="password" id="inputPasswordOutlined" aria-describedby="inputPasswordOutlinedHelper" class="text-input-field" placeholder=" ">
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordOutlinedHelper" class="helper-text">Enter a password with at least 8 characters</p>
</div>
 <div class="text-input mb-medium">
  <div class="text-input-container text-input-container-outlined">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordOutlinedValue">Password</label>
    <input type="password" id="inputPasswordOutlinedValue" aria-describedby="inputPasswordOutlinedValueHelper" class="text-input-field" placeholder=" " value="My$ecureP@ssw0rd">
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordOutlinedValueHelper" class="helper-text">Enter a password with at least 8 characters</p>
</div>
<div class="text-input mb-medium">
  <div class="text-input-container">
    <label for="inputPasswordInvalid">Password</label>
    <div class="input-container" data-bs-prefix="DEV-">
      <input type="password" id="inputPasswordInvalid" class="text-input-field is-invalid" aria-describedby="inputPasswordInvalidError" placeholder=" " value="12345">
    </div>
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordInvalidHelper" class="helper-text">Enter a password with at least 8 characters (without the DEV- prefix).</p>
  <p id="inputPasswordInvalidError" class="error-text">Password must be at least 8 characters (without the DEV- prefix).</p>
</div>
<div class="text-input">
  <div class="text-input-container text-input-container-outlined">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#lock-closed"></use>
    </svg>
    <label for="inputPasswordOutlinedInvalid">Password</label>
    <div class="input-container" data-bs-prefix="DEV-">
      <input type="password" id="inputPasswordOutlinedInvalid" class="text-input-field is-invalid" aria-describedby="inputPasswordOutlinedInvalidError" placeholder=" " value="12345">
    </div>
    <button class="btn btn-minimal btn-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
      </svg>
      <span class="visually-hidden">Show password</span>
    </button>
  </div>
  <p id="inputPasswordOutlinedInvalidHelper" class="helper-text">Enter a password with at least 8 characters (without the DEV- prefix).</p>
  <p id="inputPasswordOutlinedInvalidError" class="error-text">Password must be at least 8 characters (without the DEV- prefix).</p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(t=(i=s.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const a=["PasswordInput_0"];export{s as PasswordInput_0,a as __namedExportsOrder,n as default};
