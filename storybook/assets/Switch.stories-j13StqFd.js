const De={title:"Components/Switch",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDefault">Default switch</label>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input checked="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault2">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDefault2">Checked switch</label>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
  <label class="form-check-label" for="switchCheckDefault">Default switch (Bootstrap compatible)</label>
</div>
<div class="form-check form-switch">
  <input checked="" class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked">
  <label class="form-check-label" for="switchCheckChecked">Checked switch (Bootstrap compatible)</label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDivider">Default switch with divider</label>
    </div>
  </li>
  <li class="switch-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider2" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDivider2">Checked switch with divider</label>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithSVG">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithSVG">Default switch with an SVG icon</label>
    </div>
    <div class="control-item-assets-container">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithIconFont" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithIconFont">Checked switch with a font-icon</label>
    </div>
    <div class="control-item-assets-container">
      <span class="icon si si-settings" aria-hidden="true"></span>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchDescription" id="switchWithDescription" value="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithDescription">Default switch</label>
      <p class="control-item-description" id="switchDescription">Description text</p>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchDescription2" id="switchWithDescription2" value="" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithDescription2">Checked switch</label>
      <p class="control-item-description" id="switchDescription2">Description text</p>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <ul class="control-items-list">
      <li class="switch-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayout1" aria-describedby="switchLayout1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchLayout1">Label</label>
          <p class="control-item-description" id="switchLayout1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
      <li class="switch-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayout2" checked="" aria-describedby="switchLayout2Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchLayout2">A longer label for showing behavior in this case, switch indicator and icon will stick to the top area of the component</label>
          <p class="control-item-description" id="switchLayout2Description">Also a longer description text, it will also wrap at some point depending on the component width</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <ul class="control-items-list">
      <li class="switch-item control-item-divider control-item-reverse">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayoutRev1" aria-describedby="switchLayoutRev1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchLayoutRev1">Label with reverse layout</label>
          <p class="control-item-description" id="switchLayoutRev1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
      <li class="switch-item control-item-divider control-item-reverse">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayoutRev2" checked="" aria-describedby="switchLayoutRev2Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchLayoutRev2">A longer label with reverse layout for showing behavior in this case, switch indicator and icon will stick to the top area of the component</label>
          <p class="control-item-description" id="switchLayoutRev2Description">Also a longer description text, it will also wrap at some point depending on the component width</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckReverse" checked="">
  <label class="form-check-label" for="switchCheckReverse">Reverse switch (Bootstrap compatible)</label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item component-max-width">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchMaxWidth" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchMaxWidth">Checked switch with max width</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input disabled="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDisabled">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDisabled">Default disabled switch</label>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input disabled="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchCheckedDisabled" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchCheckedDisabled">Checked disabled switch</label>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input disabled="" class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled">
  <label class="form-check-label" for="switchCheckDisabled">Default disabled checkbox (Bootstrap compatible)</label>
</div>
<div class="form-check form-switch">
  <input disabled="" class="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked="">
  <label class="form-check-label" for="switchCheckCheckedDisabled">Checked disabled switch (Bootstrap compatible)</label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,v=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="switchReadonlyLabel"></span>
    </div>
    <div class="control-item-text-container">
      <p class="control-item-label" id="switchReadonlyLabel">Default readonly switch</p>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="switchReadonlyCheckedLabel"></span>
    </div>
    <div class="control-item-text-container">
      <p class="control-item-label" id="switchReadonlyCheckedLabel">Checked readonly switch</p>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item-container">
  <div class="switch-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalid" aria-describedby="switchInvalidDescription switchInvalidErrorText" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchInvalid">Default invalid switch</label>
      <p class="control-item-description" id="switchInvalidDescription">Description text</p>
    </div>
  </div>
  <p class="control-item-error-message" id="switchInvalidErrorText">Cannot be activated at this time.</p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid" role="switch">
  <label class="form-check-label" for="checkInvalid">
    Default invalid switch (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled">
  <li class="switch-item-container">
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalidUl" aria-describedby="switchInvalidUlDescription switchInvalidErrorTextUl" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchInvalidUl">Default invalid switch</label>
        <p class="control-item-description" id="switchInvalidUlDescription">Description text</p>
      </div>
    </div>
    <p class="control-item-error-message mb-xsmall" id="switchInvalidErrorTextUl">Cannot be activated at this time.</p>
  </li>
  <li class="switch-item-container">
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchInvalidUl2" aria-describedby="switchInvalidUl2Description switchInvalidErrorTextUl2" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchInvalidUl2">Default invalid switch</label>
        <p class="control-item-description" id="switchInvalidUl2Description">Description text</p>
      </div>
    </div>
    <p class="control-item-error-message" id="switchInvalidErrorTextUl2">Cannot be activated at this time.</p>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalidFieldset" aria-describedby="switchInvalidFieldsetDescription switchInvalidErrorTextGroup">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchInvalidFieldset">Default invalid switch</label>
      <p class="control-item-description" id="switchInvalidFieldsetDescription">Description text</p>
    </div>
  </div>
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalidFieldset2" aria-describedby="switchInvalidFieldset2Description switchInvalidErrorTextGroup" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchInvalidFieldset2">Checked invalid switch</label>
      <p class="control-item-description" id="switchInvalidFieldset2Description">Description text</p>
    </div>
  </div>
  <p class="control-item-error-message" id="switchInvalidErrorTextGroup">Incompatible choices.</p>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-md-6">
    <fieldset class="control-items-list">
      <legend>Switches group example</legend>
      <div class="switch-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup1" aria-describedby="switchGroup1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchGroup1">Group switch 1</label>
          <p class="control-item-description" id="switchGroup1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
      <div class="switch-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup2" checked="" aria-describedby="switchGroup2Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchGroup2">Group switch 2</label>
          <p class="control-item-description" id="switchGroup2Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
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
<\/script>`,w=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value="">
  <span class="visually-hidden">Standalone switch</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,f=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchNative" switch="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchNative">Native switch haptics</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var k,x,y;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDefault">Default switch</label>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input checked="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault2">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDefault2">Checked switch</label>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(y=(x=e.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var D,g,S;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
  <label class="form-check-label" for="switchCheckDefault">Default switch (Bootstrap compatible)</label>
</div>
<div class="form-check form-switch">
  <input checked="" class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked">
  <label class="form-check-label" for="switchCheckChecked">Checked switch (Bootstrap compatible)</label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var E,L,I;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDivider">Default switch with divider</label>
    </div>
  </li>
  <li class="switch-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider2" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDivider2">Checked switch with divider</label>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(I=(L=i.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var C,W,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithSVG">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithSVG">Default switch with an SVG icon</label>
    </div>
    <div class="control-item-assets-container">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithIconFont" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithIconFont">Checked switch with a font-icon</label>
    </div>
    <div class="control-item-assets-container">
      <span class="icon si si-settings" aria-hidden="true"></span>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(A=(W=s.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var _,j,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchDescription" id="switchWithDescription" value="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithDescription">Default switch</label>
      <p class="control-item-description" id="switchDescription">Description text</p>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchDescription2" id="switchWithDescription2" value="" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithDescription2">Checked switch</label>
      <p class="control-item-description" id="switchDescription2">Description text</p>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,R,U;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <ul class="control-items-list">
      <li class="switch-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayout1" aria-describedby="switchLayout1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchLayout1">Label</label>
          <p class="control-item-description" id="switchLayout1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
      <li class="switch-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayout2" checked="" aria-describedby="switchLayout2Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchLayout2">A longer label for showing behavior in this case, switch indicator and icon will stick to the top area of the component</label>
          <p class="control-item-description" id="switchLayout2Description">Also a longer description text, it will also wrap at some point depending on the component width</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(U=(R=l.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var F,T,B;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <ul class="control-items-list">
      <li class="switch-item control-item-divider control-item-reverse">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayoutRev1" aria-describedby="switchLayoutRev1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchLayoutRev1">Label with reverse layout</label>
          <p class="control-item-description" id="switchLayoutRev1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
      <li class="switch-item control-item-divider control-item-reverse">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayoutRev2" checked="" aria-describedby="switchLayoutRev2Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchLayoutRev2">A longer label with reverse layout for showing behavior in this case, switch indicator and icon will stick to the top area of the component</label>
          <p class="control-item-description" id="switchLayoutRev2Description">Also a longer description text, it will also wrap at some point depending on the component width</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(B=(T=n.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var N,V,M;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckReverse" checked="">
  <label class="form-check-label" for="switchCheckReverse">Reverse switch (Bootstrap compatible)</label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(M=(V=o.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var O,z,H;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item component-max-width">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchMaxWidth" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchMaxWidth">Checked switch with max width</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(H=(z=r.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var J,K,P;a.parameters={...a.parameters,docs:{...(J=a.parameters)==null?void 0:J.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input disabled="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDisabled">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchDisabled">Default disabled switch</label>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input disabled="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchCheckedDisabled" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchCheckedDisabled">Checked disabled switch</label>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(P=(K=a.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,X,Y;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input disabled="" class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled">
  <label class="form-check-label" for="switchCheckDisabled">Default disabled checkbox (Bootstrap compatible)</label>
</div>
<div class="form-check form-switch">
  <input disabled="" class="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked="">
  <label class="form-check-label" for="switchCheckCheckedDisabled">Checked disabled switch (Bootstrap compatible)</label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="switchReadonlyLabel"></span>
    </div>
    <div class="control-item-text-container">
      <p class="control-item-label" id="switchReadonlyLabel">Default readonly switch</p>
    </div>
  </li>
  <li class="switch-item">
    <div class="control-item-assets-container">
      <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="switchReadonlyCheckedLabel"></span>
    </div>
    <div class="control-item-text-container">
      <p class="control-item-label" id="switchReadonlyCheckedLabel">Checked readonly switch</p>
    </div>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ie,se;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item-container">
  <div class="switch-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalid" aria-describedby="switchInvalidDescription switchInvalidErrorText" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchInvalid">Default invalid switch</label>
      <p class="control-item-description" id="switchInvalidDescription">Description text</p>
    </div>
  </div>
  <p class="control-item-error-message" id="switchInvalidErrorText">Cannot be activated at this time.</p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(se=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,le,ne;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid" role="switch">
  <label class="form-check-label" for="checkInvalid">
    Default invalid switch (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ne=(le=p.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var oe,re,ae;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled">
  <li class="switch-item-container">
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalidUl" aria-describedby="switchInvalidUlDescription switchInvalidErrorTextUl" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchInvalidUl">Default invalid switch</label>
        <p class="control-item-description" id="switchInvalidUlDescription">Description text</p>
      </div>
    </div>
    <p class="control-item-error-message mb-xsmall" id="switchInvalidErrorTextUl">Cannot be activated at this time.</p>
  </li>
  <li class="switch-item-container">
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchInvalidUl2" aria-describedby="switchInvalidUl2Description switchInvalidErrorTextUl2" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchInvalidUl2">Default invalid switch</label>
        <p class="control-item-description" id="switchInvalidUl2Description">Description text</p>
      </div>
    </div>
    <p class="control-item-error-message" id="switchInvalidErrorTextUl2">Cannot be activated at this time.</p>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var de,ve,he;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalidFieldset" aria-describedby="switchInvalidFieldsetDescription switchInvalidErrorTextGroup">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchInvalidFieldset">Default invalid switch</label>
      <p class="control-item-description" id="switchInvalidFieldsetDescription">Description text</p>
    </div>
  </div>
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalidFieldset2" aria-describedby="switchInvalidFieldset2Description switchInvalidErrorTextGroup" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchInvalidFieldset2">Checked invalid switch</label>
      <p class="control-item-description" id="switchInvalidFieldset2Description">Description text</p>
    </div>
  </div>
  <p class="control-item-error-message" id="switchInvalidErrorTextGroup">Incompatible choices.</p>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(he=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var pe,me,be;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-md-6">
    <fieldset class="control-items-list">
      <legend>Switches group example</legend>
      <div class="switch-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup1" aria-describedby="switchGroup1Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchGroup1">Group switch 1</label>
          <p class="control-item-description" id="switchGroup1Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
            <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </div>
      <div class="switch-item control-item-divider">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup2" checked="" aria-describedby="switchGroup2Description">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="switchGroup2">Group switch 2</label>
          <p class="control-item-description" id="switchGroup2Description">Description text</p>
        </div>
        <div class="control-item-assets-container">
          <svg aria-hidden="true">
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
<\/script>\``,...(be=(me=u.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ue,we,fe;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value="">
  <span class="visually-hidden">Standalone switch</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(fe=(we=w.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var ke,xe,ye;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchNative" switch="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchNative">Native switch haptics</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ye=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};const ge=["Switch_0","Switch_1","Switch_2","Switch_3","Switch_4","Switch_5","Switch_6","Switch_7","Switch_8","Switch_9","Switch_10","Switch_11","Switch_12","Switch_13","Switch_14","Switch_15","Switch_16","Switch_17","Switch_18"];export{e as Switch_0,t as Switch_1,d as Switch_10,v as Switch_11,h as Switch_12,p as Switch_13,m as Switch_14,b as Switch_15,u as Switch_16,w as Switch_17,f as Switch_18,i as Switch_2,s as Switch_3,c as Switch_4,l as Switch_5,n as Switch_6,o as Switch_7,r as Switch_8,a as Switch_9,ge as __namedExportsOrder,De as default};
