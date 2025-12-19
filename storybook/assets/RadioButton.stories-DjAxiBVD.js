const je={title:"Components/RadioButton",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
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
  </div>
</fieldset> </div>
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
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item control-item-divider">
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
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithSVG" name="radioIcon">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithSVG">Default radio button with an SVG icon</label>
    </div>
    <div class="control-item-assets-container">
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithExtraLabelItem" aria-describedby="radioExtraLabel" name="radioExtraLabel">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithExtraLabelItem">Default radio button</label>
      <p class="radio-button-extra-label" id="radioExtraLabel">Extra label</p>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithExtraLabelItem2" aria-describedby="radioExtraLabel2" name="radioExtraLabel" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithExtraLabelItem2">Checked radio button</label>
      <p class="radio-button-extra-label" id="radioExtraLabel2">Extra label</p>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithDescription" aria-describedby="radioDescription" name="radioTextDescription">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithDescription">Default radio button</label>
      <p class="control-item-description" id="radioDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithDescription2" aria-describedby="radioDescriptionExtraLabel radioDescription2" name="radioTextDescription" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithDescription2">Checked radio button</label>
      <p class="radio-button-extra-label" id="radioDescriptionExtraLabel">Extra label</p>
      <p class="control-item-description" id="radioDescription2">Description text</p>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item radio-button-item-outlined">
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
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <fieldset class="control-items-list">
      <div class="radio-button-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radioLayout1" name="radioLayout" aria-describedby="radioLayout1ExtraLabel radioLayout1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radioLayout1">Label</label>
          <p class="radio-button-extra-label" id="radioLayout1ExtraLabel">Extra label</p>
          <p class="control-item-description" id="radioLayout1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
      <div class="radio-button-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radioLayout2" name="radioLayout" aria-describedby="radioLayout2ExtraLabel radioLayout2Description" checked="">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radioLayout2">A longer label for showing behavior in this case</label>
          <p class="radio-button-extra-label" id="radioLayout2ExtraLabel">Radio button indicator and icon will stick to the top area of the component</p>
          <p class="control-item-description" id="radioLayout2Description">Also a longer description text, it will also wrap at some point depending on the component width</p>
        </div>
        <div class="control-item-assets-container">
          <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
    </fieldset>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <fieldset class="control-items-list">
      <div class="radio-button-item control-item-divider control-item-reverse">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radioLayoutRev1" name="radioLayoutRev" aria-describedby="radioLayoutRev1ExtraLabel radioLayoutRev1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radioLayoutRev1">Label with reverse layout</label>
          <p class="radio-button-extra-label" id="radioLayoutRev1ExtraLabel">Extra label</p>
          <p class="control-item-description" id="radioLayoutRev1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
      <div class="radio-button-item control-item-divider control-item-reverse">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radioLayoutRev2" name="radioLayoutRev" aria-describedby="radioLayoutRev2ExtraLabel radioLayoutRev2Description" checked="">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radioLayoutRev2">A longer label with reverse layout for showing behavior in this case</label>
          <p class="radio-button-extra-label" id="radioLayoutRev2ExtraLabel">Radio button indicator and icon will stick to the top area of the component</p>
          <p class="control-item-description" id="radioLayoutRev2Description">Also a longer description text, it will also wrap at some point depending on the component width</p>
        </div>
        <div class="control-item-assets-container">
          <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
    </fieldset>
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
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="d-flex flex-row gap-small w-50">
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayoutRow1" name="radioLayoutRow">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRow1">Option 1</label>
      </div>
    </div>
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayoutRow2" name="radioLayoutRow" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRow2">Option 2</label>
      </div>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,v=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item component-max-width">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" aria-describedby="radioMWDescription" id="radioWithMaxWidth" value="" name="radioMaxWidth">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithMaxWidth">Default radio</label>
      <p class="control-item-description" id="radioMWDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item component-max-width">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" aria-describedby="radioWithMaxWidth2Description" id="radioWithMaxWidth2" value="" name="radioMaxWidth" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithMaxWidth2">Checked radio</label>
      <p class="control-item-description" id="radioWithMaxWidth2Description">Description text</p>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input disabled="" class="control-item-indicator" type="radio" value="" id="radioDisabled" name="radioDisabled" aria-describedby="radioDisabledExtraLabel radioDisabledDescription">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioDisabled">Default disabled radio button</label>
      <p class="radio-button-extra-label" id="radioDisabledExtraLabel">Extra label</p>
      <p class="control-item-description" id="radioDisabledDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input disabled="" class="control-item-indicator" type="radio" value="" id="radioCheckedDisabled" name="radioDisabled" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioCheckedDisabled">Checked disabled radio button</label>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
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
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div role="radiogroup" aria-readonly="true">
    <div class="radio-button-item">
      <div class="control-item-assets-container">
        <span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="radioReadonlyLabel" aria-describedby="radioReadonlyExtraLabel radioReadonlyDescription"></span>
      </div>
      <div class="control-item-text-container">
        <p class="control-item-label" id="radioReadonlyLabel">Default readonly radio button</p>
        <p class="radio-button-extra-label" id="radioReadonlyExtraLabel">Extra label</p>
        <p class="control-item-description" id="radioReadonlyDescription">Description text</p>
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
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid" aria-describedby="radioInvalidExtraLabel radioInvalidDescription radioInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioInvalid">Default invalid radio button</label>
      <p class="radio-button-extra-label" id="radioInvalidExtraLabel">Extra label</p>
      <p class="control-item-description" id="radioInvalidDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid2" aria-describedby="radioInvalid2Description radioInvalidErrorText" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioInvalid2">Checked invalid radio button</label>
      <p class="control-item-description" id="radioInvalid2Description">Description text</p>
    </div>
  </div>
  <p class="control-item-error-message" id="radioInvalidErrorText">There is an error.</p>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,f=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input class="form-check-input is-invalid" type="radio" value="" id="radioInvalidBootstrap">
  <label class="form-check-label" for="radioInvalidBootstrap">
    Invalid radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item radio-button-item-outlined">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid1" aria-describedby="radioLayoutOutlinedInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="outlinedInvalid1">Default invalid outlined radio button</label>
    </div>
  </div>
  <div class="radio-button-item radio-button-item-outlined">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid2" checked="" aria-describedby="radioLayoutOutlinedInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="outlinedInvalid2">Checked invalid outlined radio button</label>
    </div>
  </div>
  <p class="control-item-error-message" id="radioLayoutOutlinedInvalidErrorText">Forbidden choice.</p>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,x=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="d-flex flex-row gap-small w-50">
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator is-invalid" type="radio" value="" id="radioLayoutRowInvalid1" name="radioLayoutRowInvalid" aria-describedby="radioLayoutRowInvalidErrorText">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRowInvalid1">Option 1</label>
      </div>
    </div>
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator is-invalid" type="radio" value="" id="radioLayoutRowInvalid2" name="radioLayoutRowInvalid" aria-describedby="radioLayoutRowInvalidErrorText">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRowInvalid2">Option 2</label>
      </div>
    </div>
  </div>
  <p class="control-item-error-message" id="radioLayoutRowInvalidErrorText">Please make a choice.</p>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,y=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <fieldset class="col-md-6">
    <legend>Radio buttons group example</legend>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup1" name="radioGroup" aria-describedby="radioGroup1ExtraLabel radioGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup1">Group radio button 1</label>
        <p class="radio-button-extra-label" id="radioGroup1ExtraLabel">Extra label</p>
        <p class="control-item-description" id="radioGroup1Description">Description text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup2" name="radioGroup" aria-describedby="radioGroup2ExtraLabel radioGroup2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup2">Group radio button 2</label>
        <p class="radio-button-extra-label" id="radioGroup2ExtraLabel">Extra label</p>
        <p class="control-item-description" id="radioGroup2Description">Description text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,k=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="">
  <span class="visually-hidden">Default standalone radio button</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,D=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div>
  <input class="form-check-input" type="radio" value="" aria-label="Default standalone radio button (Bootstrap compatible)">
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var L,E,g;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
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
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(g=(E=e.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var R,w,W;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
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
<\/script>\``,...(W=(w=i.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var I,B,S;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item control-item-divider">
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
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var C,A,_;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithSVG" name="radioIcon">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithSVG">Default radio button with an SVG icon</label>
    </div>
    <div class="control-item-assets-container">
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(_=(A=a.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var j,q,G;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithExtraLabelItem" aria-describedby="radioExtraLabel" name="radioExtraLabel">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithExtraLabelItem">Default radio button</label>
      <p class="radio-button-extra-label" id="radioExtraLabel">Extra label</p>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithExtraLabelItem2" aria-describedby="radioExtraLabel2" name="radioExtraLabel" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithExtraLabelItem2">Checked radio button</label>
      <p class="radio-button-extra-label" id="radioExtraLabel2">Extra label</p>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(G=(q=o.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var O,T,M;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithDescription" aria-describedby="radioDescription" name="radioTextDescription">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithDescription">Default radio button</label>
      <p class="control-item-description" id="radioDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithDescription2" aria-describedby="radioDescriptionExtraLabel radioDescription2" name="radioTextDescription" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithDescription2">Checked radio button</label>
      <p class="radio-button-extra-label" id="radioDescriptionExtraLabel">Extra label</p>
      <p class="control-item-description" id="radioDescription2">Description text</p>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(M=(T=r.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var F,V,P;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item radio-button-item-outlined">
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
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(P=(V=n.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var z,H,J;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <fieldset class="control-items-list">
      <div class="radio-button-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radioLayout1" name="radioLayout" aria-describedby="radioLayout1ExtraLabel radioLayout1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radioLayout1">Label</label>
          <p class="radio-button-extra-label" id="radioLayout1ExtraLabel">Extra label</p>
          <p class="control-item-description" id="radioLayout1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
      <div class="radio-button-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radioLayout2" name="radioLayout" aria-describedby="radioLayout2ExtraLabel radioLayout2Description" checked="">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radioLayout2">A longer label for showing behavior in this case</label>
          <p class="radio-button-extra-label" id="radioLayout2ExtraLabel">Radio button indicator and icon will stick to the top area of the component</p>
          <p class="control-item-description" id="radioLayout2Description">Also a longer description text, it will also wrap at some point depending on the component width</p>
        </div>
        <div class="control-item-assets-container">
          <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
    </fieldset>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(J=(H=l.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,N,Q;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <fieldset class="control-items-list">
      <div class="radio-button-item control-item-divider control-item-reverse">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radioLayoutRev1" name="radioLayoutRev" aria-describedby="radioLayoutRev1ExtraLabel radioLayoutRev1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radioLayoutRev1">Label with reverse layout</label>
          <p class="radio-button-extra-label" id="radioLayoutRev1ExtraLabel">Extra label</p>
          <p class="control-item-description" id="radioLayoutRev1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
      <div class="radio-button-item control-item-divider control-item-reverse">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="radio" value="" id="radioLayoutRev2" name="radioLayoutRev" aria-describedby="radioLayoutRev2ExtraLabel radioLayoutRev2Description" checked="">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="radioLayoutRev2">A longer label with reverse layout for showing behavior in this case</label>
          <p class="radio-button-extra-label" id="radioLayoutRev2ExtraLabel">Radio button indicator and icon will stick to the top area of the component</p>
          <p class="control-item-description" id="radioLayoutRev2Description">Also a longer description text, it will also wrap at some point depending on the component width</p>
        </div>
        <div class="control-item-assets-container">
          <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
    </fieldset>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-check-reverse">
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
<\/script>\``,...(Y=(X=s.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="d-flex flex-row gap-small w-50">
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayoutRow1" name="radioLayoutRow">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRow1">Option 1</label>
      </div>
    </div>
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioLayoutRow2" name="radioLayoutRow" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRow2">Option 2</label>
      </div>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ie,te,ae;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item component-max-width">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" aria-describedby="radioMWDescription" id="radioWithMaxWidth" value="" name="radioMaxWidth">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithMaxWidth">Default radio</label>
      <p class="control-item-description" id="radioMWDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item component-max-width">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" aria-describedby="radioWithMaxWidth2Description" id="radioWithMaxWidth2" value="" name="radioMaxWidth" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithMaxWidth2">Checked radio</label>
      <p class="control-item-description" id="radioWithMaxWidth2Description">Description text</p>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,re,ne;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input disabled="" class="control-item-indicator" type="radio" value="" id="radioDisabled" name="radioDisabled" aria-describedby="radioDisabledExtraLabel radioDisabledDescription">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioDisabled">Default disabled radio button</label>
      <p class="radio-button-extra-label" id="radioDisabledExtraLabel">Extra label</p>
      <p class="control-item-description" id="radioDisabledDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input disabled="" class="control-item-indicator" type="radio" value="" id="radioCheckedDisabled" name="radioDisabled" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioCheckedDisabled">Checked disabled radio button</label>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ne=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,de,se;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
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
<\/script>\``,...(se=(de=u.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ce,ve,me;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div role="radiogroup" aria-readonly="true">
    <div class="radio-button-item">
      <div class="control-item-assets-container">
        <span class="control-item-indicator" role="radio" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="radioReadonlyLabel" aria-describedby="radioReadonlyExtraLabel radioReadonlyDescription"></span>
      </div>
      <div class="control-item-text-container">
        <p class="control-item-label" id="radioReadonlyLabel">Default readonly radio button</p>
        <p class="radio-button-extra-label" id="radioReadonlyExtraLabel">Extra label</p>
        <p class="control-item-description" id="radioReadonlyDescription">Description text</p>
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
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(me=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var ue,pe,be;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid" aria-describedby="radioInvalidExtraLabel radioInvalidDescription radioInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioInvalid">Default invalid radio button</label>
      <p class="radio-button-extra-label" id="radioInvalidExtraLabel">Extra label</p>
      <p class="control-item-description" id="radioInvalidDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="radio" value="" name="radioInvalid" id="radioInvalid2" aria-describedby="radioInvalid2Description radioInvalidErrorText" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioInvalid2">Checked invalid radio button</label>
      <p class="control-item-description" id="radioInvalid2Description">Description text</p>
    </div>
  </div>
  <p class="control-item-error-message" id="radioInvalidErrorText">There is an error.</p>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(be=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var fe,he,xe;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input class="form-check-input is-invalid" type="radio" value="" id="radioInvalidBootstrap">
  <label class="form-check-label" for="radioInvalidBootstrap">
    Invalid radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(xe=(he=f.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ye,ke,De;h.parameters={...h.parameters,docs:{...(ye=h.parameters)==null?void 0:ye.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item radio-button-item-outlined">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid1" aria-describedby="radioLayoutOutlinedInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="outlinedInvalid1">Default invalid outlined radio button</label>
    </div>
  </div>
  <div class="radio-button-item radio-button-item-outlined">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid2" checked="" aria-describedby="radioLayoutOutlinedInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="outlinedInvalid2">Checked invalid outlined radio button</label>
    </div>
  </div>
  <p class="control-item-error-message" id="radioLayoutOutlinedInvalidErrorText">Forbidden choice.</p>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(De=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Le,Ee,ge;x.parameters={...x.parameters,docs:{...(Le=x.parameters)==null?void 0:Le.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="d-flex flex-row gap-small w-50">
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator is-invalid" type="radio" value="" id="radioLayoutRowInvalid1" name="radioLayoutRowInvalid" aria-describedby="radioLayoutRowInvalidErrorText">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRowInvalid1">Option 1</label>
      </div>
    </div>
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator is-invalid" type="radio" value="" id="radioLayoutRowInvalid2" name="radioLayoutRowInvalid" aria-describedby="radioLayoutRowInvalidErrorText">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRowInvalid2">Option 2</label>
      </div>
    </div>
  </div>
  <p class="control-item-error-message" id="radioLayoutRowInvalidErrorText">Please make a choice.</p>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ge=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:ge.source}}};var Re,we,We;y.parameters={...y.parameters,docs:{...(Re=y.parameters)==null?void 0:Re.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <fieldset class="col-md-6">
    <legend>Radio buttons group example</legend>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup1" name="radioGroup" aria-describedby="radioGroup1ExtraLabel radioGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup1">Group radio button 1</label>
        <p class="radio-button-extra-label" id="radioGroup1ExtraLabel">Extra label</p>
        <p class="control-item-description" id="radioGroup1Description">Description text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="radio-button-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioGroup2" name="radioGroup" aria-describedby="radioGroup2ExtraLabel radioGroup2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioGroup2">Group radio button 2</label>
        <p class="radio-button-extra-label" id="radioGroup2ExtraLabel">Extra label</p>
        <p class="control-item-description" id="radioGroup2Description">Description text</p>
      </div>
      <div class="control-item-assets-container">
        <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
          <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(We=(we=y.parameters)==null?void 0:we.docs)==null?void 0:We.source}}};var Ie,Be,Se;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="">
  <span class="visually-hidden">Default standalone radio button</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Se=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};var Ce,Ae,_e;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div>
  <input class="form-check-input" type="radio" value="" aria-label="Default standalone radio button (Bootstrap compatible)">
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(_e=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};const qe=["RadioButton_0","RadioButton_1","RadioButton_2","RadioButton_3","RadioButton_4","RadioButton_5","RadioButton_6","RadioButton_7","RadioButton_8","RadioButton_9","RadioButton_10","RadioButton_11","RadioButton_12","RadioButton_13","RadioButton_14","RadioButton_15","RadioButton_16","RadioButton_17","RadioButton_18","RadioButton_19","RadioButton_20","RadioButton_21"];export{e as RadioButton_0,i as RadioButton_1,c as RadioButton_10,v as RadioButton_11,m as RadioButton_12,u as RadioButton_13,p as RadioButton_14,b as RadioButton_15,f as RadioButton_16,h as RadioButton_17,x as RadioButton_18,y as RadioButton_19,t as RadioButton_2,k as RadioButton_20,D as RadioButton_21,a as RadioButton_3,o as RadioButton_4,r as RadioButton_5,n as RadioButton_6,l as RadioButton_7,d as RadioButton_8,s as RadioButton_9,qe as __namedExportsOrder,je as default};
