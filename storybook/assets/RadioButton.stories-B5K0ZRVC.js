const ge={title:"Components/RadioButton",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDefault" name="radioBasic">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDefault">Default radio button</label>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input checked="" class="control-item-indicator" type="radio" value="" id="radioDefault2" name="radioBasic">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDefault2">Checked radio button</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input class="form-check-input" type="radio" value="" id="checkDefault" name="radioBasicBs">
  <label class="form-check-label" for="checkDefault">
    Default radio button (Bootstrap compatible)
  </label>
</div>
<div class="form-check">
  <input checked="" class="form-check-input" type="radio" value="" id="checkChecked" name="radioBasicBs">
  <label class="form-check-label" for="checkChecked">
    Checked radio button (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDivider" name="radioDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDivider">Default radio button with divider</label>
  </div>
</div>
<div class="radio-button-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDivider2" name="radioDivider" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDivider2">Checked radio button with divider</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioWithSVG" name="radioIcon">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioWithSVG">Default radio button with an SVG icon</label>
  </div>
  <div class="control-item-assets-container">
    <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioWithIconFont" name="radioIcon" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioWithIconFont">Checked radio button with a font-icon</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioAdditionalLabel" aria-describedby="radioAdditionalTextDescription" name="radioAdditionalLabel">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioAdditionalLabel">Default radio button</label>
    <p class="radio-button-additional-label" id="radioAdditionalTextDescription">Additional label</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioAdditionalLabel2" aria-describedby="radioAdditionalTextDescription2" name="radioAdditionalLabel" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioAdditionalLabel2">Checked radio button</label>
    <p class="radio-button-additional-label" id="radioAdditionalTextDescription2">Additional label</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioHelperText" aria-describedby="radioAdditionalTextHelper" name="radioTextHelper">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioHelperText">Default radio button</label>
    <p class="control-item-helper" id="radioAdditionalTextHelper">Helper text</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioHelperText2" aria-describedby="radioAdditionalTextHelper2 radioAdditionalTextDescription3" name="radioTextHelper" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioHelperText2">Checked radio button</label>
    <p class="radio-button-additional-label" id="radioAdditionalTextDescription3">Additional label</p>
    <p class="control-item-helper" id="radioAdditionalTextHelper2">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioOutlined1" name="radioOutlined">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioOutlined1">Default outlined radio button</label>
  </div>
</div>
<div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioOutlined2" name="radioOutlined" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioOutlined2">Checked outlined radio button</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayout1" name="radioLayout" aria-describedby="radioLayout1AdditionalLabel radioLayout1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayout1">Label</label>
        <p class="radio-button-additional-label" id="radioLayout1AdditionalLabel">Additional label</p>
        <p class="control-item-helper" id="radioLayout1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayout2" name="radioLayout" aria-describedby="radioLayout2AdditionalLabel radioLayout2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayout2">A longer label for showing behavior in this case</label>
        <p class="radio-button-additional-label" id="radioLayout2AdditionalLabel">Radio button indicator and icon will stick to the top area of the component</p>
        <p class="control-item-helper" id="radioLayout2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="radio-button-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayoutRev1" name="radioLayoutRev" aria-describedby="radioLayoutRev1AdditionalLabel radioLayoutRev1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRev1">Label with reverse layout</label>
        <p class="radio-button-additional-label" id="radioLayoutRev1AdditionalLabel">Additional label</p>
        <p class="control-item-helper" id="radioLayoutRev1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayoutRev2" name="radioLayoutRev" aria-describedby="radioLayoutRev2AdditionalLabel radioLayoutRev2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRev2">A longer label with reverse layout for showing behavior in this case</label>
        <p class="radio-button-additional-label" id="radioLayoutRev2AdditionalLabel">Radio button indicator and icon will stick to the top area of the component</p>
        <p class="control-item-helper" id="radioLayoutRev2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" id="reverseCheck1" name="radioReverseBs">
  <label class="form-check-label" for="reverseCheck1">
    Default reverse radio button (Bootstrap compatible)
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" id="reverseCheck2" name="radioReverseBs" checked="">
  <label class="form-check-label" for="reverseCheck2">
    Checked reverse radio button (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="radio" value="" id="radioDisabled" name="radioDisabled" aria-describedby="radioDisabledAdditionalLabel radioDisabledDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDisabled">Default disabled radio button</label>
    <p class="radio-button-additional-label" id="radioDisabledAdditionalLabel">Additional label</p>
    <p class="control-item-helper" id="radioDisabledDescription">Helper text</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="radio" value="" id="radioCheckedDisabled" name="radioDisabled" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioCheckedDisabled">Checked disabled radio button</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,v=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input disabled="" class="form-check-input" type="radio" value="" id="checkDisabled" name="radioDisabledBs">
  <label class="form-check-label" for="checkDisabled">
    Default disabled radio button
  </label>
</div>
<div class="form-check">
  <input disabled="" class="form-check-input" type="radio" value="" id="checkCheckedDisabled" name="radioDisabledBs" checked="">
  <label class="form-check-label" for="checkCheckedDisabled">
    Checked disabled radio button
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div role="radiogroup" aria-readonly="true">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="radioReadonlyLabel" aria-describedby="radioReadonlyAdditionalLabel radioReadonlyDescription"></span>
    </div>
    <div class="control-item-text-container">
      <p class="control-item-label" id="radioReadonlyLabel">Default readonly radio button</p>
      <p class="radio-button-additional-label" id="radioReadonlyAdditionalLabel">Additional label</p>
      <p class="control-item-helper" id="radioReadonlyDescription">Helper text</p>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="radioReadonlyCheckedLabel"></span>
    </div>
    <div class="control-item-text-container">
      <p class="control-item-label" id="radioReadonlyCheckedLabel">Checked readonly radio button</p>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid" aria-describedby="radioInvalidAdditionalLabel radioInvalidDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioInvalid">Default invalid radio button</label>
    <p class="radio-button-additional-label" id="radioInvalidAdditionalLabel">Additional label</p>
    <p class="control-item-helper" id="radioInvalidDescription">Helper text</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid2" aria-describedby="radioInvalid2Description" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioInvalid2">Checked invalid radio button</label>
    <p class="control-item-helper" id="radioInvalid2Description">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input class="form-check-input is-invalid" type="radio" value="" id="radioInvalidBootstrap">
  <label class="form-check-label" for="radioInvalidBootstrap">
    Invalid radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid1">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="outlinedInvalid1">Default invalid outlined radio button</label>
  </div>
</div>
<div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid2" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="outlinedInvalid2">Checked invalid outlined radio button</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <fieldset class="col-md-6">
    <legend>Radio buttons group example</legend>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup1" name="radioGroup" aria-describedby="radioGroup1AdditionalLabel radioGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup1">Group radio button 1</label>
        <p class="radio-button-additional-label" id="radioGroup1AdditionalLabel">Additional label</p>
        <p class="control-item-helper" id="radioGroup1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup2" name="radioGroup" aria-describedby="radioGroup2AdditionalLabel radioGroup2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup2">Group radio button 2</label>
        <p class="radio-button-additional-label" id="radioGroup2AdditionalLabel">Additional label</p>
        <p class="control-item-helper" id="radioGroup2Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,f=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="">
  <span class="visually-hidden">Default standalone radio button</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,k=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div>
  <input class="form-check-input" type="radio" value="" aria-label="Default standalone radio button (Bootstrap compatible)">
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var y,x,D;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDefault" name="radioBasic">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDefault">Default radio button</label>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input checked="" class="control-item-indicator" type="radio" value="" id="radioDefault2" name="radioBasic">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDefault2">Checked radio button</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(D=(x=e.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var g,L,A;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input class="form-check-input" type="radio" value="" id="checkDefault" name="radioBasicBs">
  <label class="form-check-label" for="checkDefault">
    Default radio button (Bootstrap compatible)
  </label>
</div>
<div class="form-check">
  <input checked="" class="form-check-input" type="radio" value="" id="checkChecked" name="radioBasicBs">
  <label class="form-check-label" for="checkChecked">
    Checked radio button (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(A=(L=i.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var R,E,B;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDivider" name="radioDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDivider">Default radio button with divider</label>
  </div>
</div>
<div class="radio-button-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioDivider2" name="radioDivider" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDivider2">Checked radio button with divider</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(B=(E=t.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var w,C,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioWithSVG" name="radioIcon">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioWithSVG">Default radio button with an SVG icon</label>
  </div>
  <div class="control-item-assets-container">
    <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioWithIconFont" name="radioIcon" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioWithIconFont">Checked radio button with a font-icon</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var I,W,_;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioAdditionalLabel" aria-describedby="radioAdditionalTextDescription" name="radioAdditionalLabel">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioAdditionalLabel">Default radio button</label>
    <p class="radio-button-additional-label" id="radioAdditionalTextDescription">Additional label</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioAdditionalLabel2" aria-describedby="radioAdditionalTextDescription2" name="radioAdditionalLabel" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioAdditionalLabel2">Checked radio button</label>
    <p class="radio-button-additional-label" id="radioAdditionalTextDescription2">Additional label</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(_=(W=o.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var H,j,q;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioHelperText" aria-describedby="radioAdditionalTextHelper" name="radioTextHelper">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioHelperText">Default radio button</label>
    <p class="control-item-helper" id="radioAdditionalTextHelper">Helper text</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioHelperText2" aria-describedby="radioAdditionalTextHelper2 radioAdditionalTextDescription3" name="radioTextHelper" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioHelperText2">Checked radio button</label>
    <p class="radio-button-additional-label" id="radioAdditionalTextDescription3">Additional label</p>
    <p class="control-item-helper" id="radioAdditionalTextHelper2">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(q=(j=r.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,T,O;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioOutlined1" name="radioOutlined">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioOutlined1">Default outlined radio button</label>
  </div>
</div>
<div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="radio" value="" id="radioOutlined2" name="radioOutlined" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioOutlined2">Checked outlined radio button</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var V,F,z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayout1" name="radioLayout" aria-describedby="radioLayout1AdditionalLabel radioLayout1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayout1">Label</label>
        <p class="radio-button-additional-label" id="radioLayout1AdditionalLabel">Additional label</p>
        <p class="control-item-helper" id="radioLayout1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayout2" name="radioLayout" aria-describedby="radioLayout2AdditionalLabel radioLayout2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayout2">A longer label for showing behavior in this case</label>
        <p class="radio-button-additional-label" id="radioLayout2AdditionalLabel">Radio button indicator and icon will stick to the top area of the component</p>
        <p class="control-item-helper" id="radioLayout2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(z=(F=l.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var J,K,M;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="radio-button-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayoutRev1" name="radioLayoutRev" aria-describedby="radioLayoutRev1AdditionalLabel radioLayoutRev1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRev1">Label with reverse layout</label>
        <p class="radio-button-additional-label" id="radioLayoutRev1AdditionalLabel">Additional label</p>
        <p class="control-item-helper" id="radioLayoutRev1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayoutRev2" name="radioLayoutRev" aria-describedby="radioLayoutRev2AdditionalLabel radioLayoutRev2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRev2">A longer label with reverse layout for showing behavior in this case</label>
        <p class="radio-button-additional-label" id="radioLayoutRev2AdditionalLabel">Radio button indicator and icon will stick to the top area of the component</p>
        <p class="control-item-helper" id="radioLayoutRev2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,P,Q;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" id="reverseCheck1" name="radioReverseBs">
  <label class="form-check-label" for="reverseCheck1">
    Default reverse radio button (Bootstrap compatible)
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" id="reverseCheck2" name="radioReverseBs" checked="">
  <label class="form-check-label" for="reverseCheck2">
    Checked reverse radio button (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Q=(P=s.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="radio" value="" id="radioDisabled" name="radioDisabled" aria-describedby="radioDisabledAdditionalLabel radioDisabledDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioDisabled">Default disabled radio button</label>
    <p class="radio-button-additional-label" id="radioDisabledAdditionalLabel">Additional label</p>
    <p class="control-item-helper" id="radioDisabledDescription">Helper text</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="radio" value="" id="radioCheckedDisabled" name="radioDisabled" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioCheckedDisabled">Checked disabled radio button</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input disabled="" class="form-check-input" type="radio" value="" id="checkDisabled" name="radioDisabledBs">
  <label class="form-check-label" for="checkDisabled">
    Default disabled radio button
  </label>
</div>
<div class="form-check">
  <input disabled="" class="form-check-input" type="radio" value="" id="checkCheckedDisabled" name="radioDisabledBs" checked="">
  <label class="form-check-label" for="checkCheckedDisabled">
    Checked disabled radio button
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ie,te,ae;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div role="radiogroup" aria-readonly="true">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="radioReadonlyLabel" aria-describedby="radioReadonlyAdditionalLabel radioReadonlyDescription"></span>
    </div>
    <div class="control-item-text-container">
      <p class="control-item-label" id="radioReadonlyLabel">Default readonly radio button</p>
      <p class="radio-button-additional-label" id="radioReadonlyAdditionalLabel">Additional label</p>
      <p class="control-item-helper" id="radioReadonlyDescription">Helper text</p>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="radioReadonlyCheckedLabel"></span>
    </div>
    <div class="control-item-text-container">
      <p class="control-item-label" id="radioReadonlyCheckedLabel">Checked readonly radio button</p>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ae=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,re,ne;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid" aria-describedby="radioInvalidAdditionalLabel radioInvalidDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioInvalid">Default invalid radio button</label>
    <p class="radio-button-additional-label" id="radioInvalidAdditionalLabel">Additional label</p>
    <p class="control-item-helper" id="radioInvalidDescription">Helper text</p>
  </div>
</div>
<div class="radio-button-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid2" aria-describedby="radioInvalid2Description" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="radioInvalid2">Checked invalid radio button</label>
    <p class="control-item-helper" id="radioInvalid2Description">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ne=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,de,se;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input class="form-check-input is-invalid" type="radio" value="" id="radioInvalidBootstrap">
  <label class="form-check-label" for="radioInvalidBootstrap">
    Invalid radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(se=(de=b.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ce,ve,ue;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid1">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="outlinedInvalid1">Default invalid outlined radio button</label>
  </div>
</div>
<div class="radio-button-item radio-button-item-outlined">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid2" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="outlinedInvalid2">Checked invalid outlined radio button</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ue=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var pe,be,me;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <fieldset class="col-md-6">
    <legend>Radio buttons group example</legend>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup1" name="radioGroup" aria-describedby="radioGroup1AdditionalLabel radioGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup1">Group radio button 1</label>
        <p class="radio-button-additional-label" id="radioGroup1AdditionalLabel">Additional label</p>
        <p class="control-item-helper" id="radioGroup1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup2" name="radioGroup" aria-describedby="radioGroup2AdditionalLabel radioGroup2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup2">Group radio button 2</label>
        <p class="radio-button-additional-label" id="radioGroup2AdditionalLabel">Additional label</p>
        <p class="control-item-helper" id="radioGroup2Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(me=(be=h.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var he,fe,ke;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="">
  <span class="visually-hidden">Default standalone radio button</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ke=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var ye,xe,De;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div>
  <input class="form-check-input" type="radio" value="" aria-label="Default standalone radio button (Bootstrap compatible)">
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(De=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};const Le=["RadioButton_0","RadioButton_1","RadioButton_2","RadioButton_3","RadioButton_4","RadioButton_5","RadioButton_6","RadioButton_7","RadioButton_8","RadioButton_9","RadioButton_10","RadioButton_11","RadioButton_12","RadioButton_13","RadioButton_14","RadioButton_15","RadioButton_16","RadioButton_17","RadioButton_18"];export{e as RadioButton_0,i as RadioButton_1,c as RadioButton_10,v as RadioButton_11,u as RadioButton_12,p as RadioButton_13,b as RadioButton_14,m as RadioButton_15,h as RadioButton_16,f as RadioButton_17,k as RadioButton_18,t as RadioButton_2,a as RadioButton_3,o as RadioButton_4,r as RadioButton_5,n as RadioButton_6,l as RadioButton_7,d as RadioButton_8,s as RadioButton_9,Le as __namedExportsOrder,ge as default};
