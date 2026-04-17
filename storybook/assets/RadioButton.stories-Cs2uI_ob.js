const Ue={title:"Components/RadioButton",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
        <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="radio" value="" name="radioInvalid" id="radioInvalid" aria-describedby="radioInvalidExtraLabel radioInvalidDescription radioInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioInvalid">Default invalid radio button</label>
      <p class="radio-button-extra-label" id="radioInvalidExtraLabel">Extra label</p>
      <p class="control-item-description" id="radioInvalidDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="radio" value="" name="radioInvalid" id="radioInvalid2" aria-describedby="radioInvalid2Description radioInvalidErrorText" checked="">
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
      <input class="control-item-indicator" aria-invalid="true" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid1" aria-describedby="radioLayoutOutlinedInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="outlinedInvalid1">Default invalid outlined radio button</label>
    </div>
  </div>
  <div class="radio-button-item radio-button-item-outlined">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid2" checked="" aria-describedby="radioLayoutOutlinedInvalidErrorText">
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
        <input class="control-item-indicator" aria-invalid="true" type="radio" value="" id="radioLayoutRowInvalid1" name="radioLayoutRowInvalid" aria-describedby="radioLayoutRowInvalidErrorText">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRowInvalid1">Option 1</label>
      </div>
    </div>
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" aria-invalid="true" type="radio" value="" id="radioLayoutRowInvalid2" name="radioLayoutRowInvalid" aria-describedby="radioLayoutRowInvalidErrorText">
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
<\/script>`,y=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <fieldset class="control-items-list">
    <div class="radio-button-item">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioSkeleton" name="radioSkeleton">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioSkeleton">Default radio button</label>
      </div>
    </div>
    <div class="radio-button-item">
      <div class="control-item-assets-container">
        <input checked="" class="control-item-indicator" type="radio" value="" id="radioSkeleton2" name="radioSkeleton">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioSkeleton2">Checked radio button</label>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,k=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
          <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
          <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,D=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="">
  <span class="visually-hidden">Default standalone radio button</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,L=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div>
  <input class="form-check-input" type="radio" value="" aria-label="Default standalone radio button (Bootstrap compatible)">
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,g=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item-container">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioUniqueMandatory" name="mandatoryRadio" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label is-required" for="radioUniqueMandatory">Mandatory unique radio button</label>
    </div>
  </div>
</div>
<hr class="my-xlarge">
<fieldset class="control-items-list">
  <legend class="is-required">Mandatory radio buttons</legend>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="mandatoryRadio1" name="mandatoryRadios" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="mandatoryRadio1">Default radio button</label>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input checked="" class="control-item-indicator" type="radio" value="" id="mandatoryRadio2" name="mandatoryRadios" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="mandatoryRadio2">Checked radio button</label>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var E,R,w;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>\``,...(w=(R=e.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var W,S,I;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
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
<\/script>\``,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var B,C,q;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>\``,...(q=(C=t.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var A,_,j;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioWithSVG" name="radioIcon">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioWithSVG">Default radio button with an SVG icon</label>
    </div>
    <div class="control-item-assets-container">
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
<\/script>\``,...(j=(_=a.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var G,M,O;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>\``,...(O=(M=o.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var T,F,V;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>\``,...(V=(F=r.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var U,P,z;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>\``,...(z=(P=n.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var H,J,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
    </fieldset>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,X;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
    </fieldset>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(X=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-check-reverse">
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
<\/script>\``,...($=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ie,te;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>\``,...(te=(ie=c.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var ae,oe,re;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>\``,...(re=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,le,de;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>\``,...(de=(le=m.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var se,ce,ve;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
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
<\/script>\``,...(ve=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:ve.source}}};var me,ue,be;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
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
<\/script>\``,...(be=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var pe,fe,he;p.parameters={...p.parameters,docs:{...(pe=p.parameters)==null?void 0:pe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="radio" value="" name="radioInvalid" id="radioInvalid" aria-describedby="radioInvalidExtraLabel radioInvalidDescription radioInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioInvalid">Default invalid radio button</label>
      <p class="radio-button-extra-label" id="radioInvalidExtraLabel">Extra label</p>
      <p class="control-item-description" id="radioInvalidDescription">Description text</p>
    </div>
  </div>
  <div class="radio-button-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="radio" value="" name="radioInvalid" id="radioInvalid2" aria-describedby="radioInvalid2Description radioInvalidErrorText" checked="">
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
<\/script>\``,...(he=(fe=p.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var xe,ye,ke;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input class="form-check-input is-invalid" type="radio" value="" id="radioInvalidBootstrap">
  <label class="form-check-label" for="radioInvalidBootstrap">
    Invalid radio
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ke=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var De,Le,ge;h.parameters={...h.parameters,docs:{...(De=h.parameters)==null?void 0:De.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="radio-button-item radio-button-item-outlined">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid1" aria-describedby="radioLayoutOutlinedInvalidErrorText">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="outlinedInvalid1">Default invalid outlined radio button</label>
    </div>
  </div>
  <div class="radio-button-item radio-button-item-outlined">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="radio" value="" name="outlinedInvalid" id="outlinedInvalid2" checked="" aria-describedby="radioLayoutOutlinedInvalidErrorText">
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
<\/script>\``,...(ge=(Le=h.parameters)==null?void 0:Le.docs)==null?void 0:ge.source}}};var Ee,Re,we;x.parameters={...x.parameters,docs:{...(Ee=x.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="d-flex flex-row gap-small w-50">
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" aria-invalid="true" type="radio" value="" id="radioLayoutRowInvalid1" name="radioLayoutRowInvalid" aria-describedby="radioLayoutRowInvalidErrorText">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioLayoutRowInvalid1">Option 1</label>
      </div>
    </div>
    <div class="radio-button-item flex-fill">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" aria-invalid="true" type="radio" value="" id="radioLayoutRowInvalid2" name="radioLayoutRowInvalid" aria-describedby="radioLayoutRowInvalidErrorText">
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
<\/script>\``,...(we=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var We,Se,Ie;y.parameters={...y.parameters,docs:{...(We=y.parameters)==null?void 0:We.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <fieldset class="control-items-list">
    <div class="radio-button-item">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="radio" value="" id="radioSkeleton" name="radioSkeleton">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioSkeleton">Default radio button</label>
      </div>
    </div>
    <div class="radio-button-item">
      <div class="control-item-assets-container">
        <input checked="" class="control-item-indicator" type="radio" value="" id="radioSkeleton2" name="radioSkeleton">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="radioSkeleton2">Checked radio button</label>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Ie=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var Be,Ce,qe;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
          <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
          <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(qe=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:qe.source}}};var Ae,_e,je;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="radio-button-standalone">
  <input class="control-item-indicator" type="radio" value="">
  <span class="visually-hidden">Default standalone radio button</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(je=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var Ge,Me,Oe;L.parameters={...L.parameters,docs:{...(Ge=L.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div>
  <input class="form-check-input" type="radio" value="" aria-label="Default standalone radio button (Bootstrap compatible)">
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Oe=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Te,Fe,Ve;g.parameters={...g.parameters,docs:{...(Te=g.parameters)==null?void 0:Te.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="radio-button-item-container">
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioUniqueMandatory" name="mandatoryRadio" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label is-required" for="radioUniqueMandatory">Mandatory unique radio button</label>
    </div>
  </div>
</div>
<hr class="my-xlarge">
<fieldset class="control-items-list">
  <legend class="is-required">Mandatory radio buttons</legend>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="mandatoryRadio1" name="mandatoryRadios" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="mandatoryRadio1">Default radio button</label>
    </div>
  </div>
  <div class="radio-button-item">
    <div class="control-item-assets-container">
      <input checked="" class="control-item-indicator" type="radio" value="" id="mandatoryRadio2" name="mandatoryRadios" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="mandatoryRadio2">Checked radio button</label>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Ve=(Fe=g.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};const Pe=["RadioButton_0","RadioButton_1","RadioButton_2","RadioButton_3","RadioButton_4","RadioButton_5","RadioButton_6","RadioButton_7","RadioButton_8","RadioButton_9","RadioButton_10","RadioButton_11","RadioButton_12","RadioButton_13","RadioButton_14","RadioButton_15","RadioButton_16","RadioButton_17","RadioButton_18","RadioButton_19","RadioButton_20","RadioButton_21","RadioButton_22","RadioButton_23"];export{e as RadioButton_0,i as RadioButton_1,c as RadioButton_10,v as RadioButton_11,m as RadioButton_12,u as RadioButton_13,b as RadioButton_14,p as RadioButton_15,f as RadioButton_16,h as RadioButton_17,x as RadioButton_18,y as RadioButton_19,t as RadioButton_2,k as RadioButton_20,D as RadioButton_21,L as RadioButton_22,g as RadioButton_23,a as RadioButton_3,o as RadioButton_4,r as RadioButton_5,n as RadioButton_6,l as RadioButton_7,d as RadioButton_8,s as RadioButton_9,Pe as __namedExportsOrder,Ue as default};
