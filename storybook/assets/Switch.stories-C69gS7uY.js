const qe={title:"Components/Switch",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
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
        <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
      <input class="control-item-indicator" aria-invalid="true" type="checkbox" role="switch" value="" id="switchInvalid" aria-describedby="switchInvalidDescription switchInvalidErrorText" checked="">
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
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid" role="switch">
  <label class="form-check-label" for="checkInvalid">
    Default invalid switch (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled">
  <li class="switch-item-container">
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" aria-invalid="true" type="checkbox" role="switch" value="" id="switchInvalidUl" aria-describedby="switchInvalidUlDescription switchInvalidErrorTextUl" checked="">
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
      <input class="control-item-indicator" aria-invalid="true" type="checkbox" role="switch" value="" id="switchInvalidFieldset" aria-describedby="switchInvalidFieldsetDescription switchInvalidErrorTextGroup">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchInvalidFieldset">Default invalid switch</label>
      <p class="control-item-description" id="switchInvalidFieldsetDescription">Description text</p>
    </div>
  </div>
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="checkbox" role="switch" value="" id="switchInvalidFieldset2" aria-describedby="switchInvalidFieldset2Description switchInvalidErrorTextGroup" checked="">
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
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchSkeleton">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchSkeleton">Skeleton switch</label>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,w=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
<\/script>`,f=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value="">
  <span class="visually-hidden">Standalone switch</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,k=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
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
<\/script>`,x=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item-container">
  <div class="switch-item component-max-width">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchUniqueMandatory" name="mandatorySwitch" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label is-required" for="switchUniqueMandatory">Mandatory unique switch</label>
    </div>
  </div>
</div>
<hr class="my-xlarge">
<fieldset class="control-items-list">
  <legend class="is-required">Mandatory switches</legend>
  <div class="switch-item component-max-width">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="mandatorySwitch1" name="mandatorySwitches" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="mandatorySwitch1">Default switch</label>
    </div>
  </div>
  <div class="switch-item component-max-width">
    <div class="control-item-assets-container">
      <input checked="" class="control-item-indicator" type="checkbox" role="switch" value="" id="mandatorySwitch2" name="mandatorySwitches" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="mandatorySwitch2">Checked switch</label>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var y,D,g;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
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
<\/script>\``,...(g=(D=e.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var S,E,L;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
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
<\/script>\``,...(L=(E=t.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var I,C,W;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
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
<\/script>\``,...(W=(C=i.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var q,A,_;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithSVG">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithSVG">Default switch with an SVG icon</label>
    </div>
    <div class="control-item-assets-container">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
<\/script>\``,...(_=(A=s.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var j,G,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
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
<\/script>\``,...(R=(G=c.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var U,F,T;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(T=(F=n.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var B,M,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(N=(M=l.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var V,O,z;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckReverse" checked="">
  <label class="form-check-label" for="switchCheckReverse">Reverse switch (Bootstrap compatible)</label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(z=(O=o.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var H,J,K;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item component-max-width">
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
<\/script>\``,...(K=(J=r.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,X;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
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
<\/script>\``,...(X=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
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
<\/script>\``,...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ie;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="control-items-list">
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
<\/script>\``,...(ie=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,ce,ne;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item-container">
  <div class="switch-item control-item-divider">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="checkbox" role="switch" value="" id="switchInvalid" aria-describedby="switchInvalidDescription switchInvalidErrorText" checked="">
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
<\/script>\``,...(ne=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ne.source}}};var le,oe,re;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid" role="switch">
  <label class="form-check-label" for="checkInvalid">
    Default invalid switch (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(re=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ae,de,ve;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled">
  <li class="switch-item-container">
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" aria-invalid="true" type="checkbox" role="switch" value="" id="switchInvalidUl" aria-describedby="switchInvalidUlDescription switchInvalidErrorTextUl" checked="">
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
<\/script>\``,...(ve=(de=p.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var he,me,pe;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <fieldset class="control-items-list">
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="checkbox" role="switch" value="" id="switchInvalidFieldset" aria-describedby="switchInvalidFieldsetDescription switchInvalidErrorTextGroup">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchInvalidFieldset">Default invalid switch</label>
      <p class="control-item-description" id="switchInvalidFieldsetDescription">Description text</p>
    </div>
  </div>
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" aria-invalid="true" type="checkbox" role="switch" value="" id="switchInvalidFieldset2" aria-describedby="switchInvalidFieldset2Description switchInvalidErrorTextGroup" checked="">
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
<\/script>\``,...(pe=(me=b.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,ue,we;u.parameters={...u.parameters,docs:{...(be=u.parameters)==null?void 0:be.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <div class="switch-item">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchSkeleton">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchSkeleton">Skeleton switch</label>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(we=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:we.source}}};var fe,ke,xe;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
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
            <use xlink:href="/orange/docs/1.2/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
<\/script>\``,...(xe=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var ye,De,ge;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value="">
  <span class="visually-hidden">Standalone switch</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ge=(De=f.parameters)==null?void 0:De.docs)==null?void 0:ge.source}}};var Se,Ee,Le;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
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
<\/script>\``,...(Le=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Ie,Ce,We;x.parameters={...x.parameters,docs:{...(Ie=x.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item-container">
  <div class="switch-item component-max-width">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchUniqueMandatory" name="mandatorySwitch" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label is-required" for="switchUniqueMandatory">Mandatory unique switch</label>
    </div>
  </div>
</div>
<hr class="my-xlarge">
<fieldset class="control-items-list">
  <legend class="is-required">Mandatory switches</legend>
  <div class="switch-item component-max-width">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="mandatorySwitch1" name="mandatorySwitches" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="mandatorySwitch1">Default switch</label>
    </div>
  </div>
  <div class="switch-item component-max-width">
    <div class="control-item-assets-container">
      <input checked="" class="control-item-indicator" type="checkbox" role="switch" value="" id="mandatorySwitch2" name="mandatorySwitches" required="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="mandatorySwitch2">Checked switch</label>
    </div>
  </div>
</fieldset> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(We=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:We.source}}};const Ae=["Switch_0","Switch_1","Switch_2","Switch_3","Switch_4","Switch_5","Switch_6","Switch_7","Switch_8","Switch_9","Switch_10","Switch_11","Switch_12","Switch_13","Switch_14","Switch_15","Switch_16","Switch_17","Switch_18","Switch_19","Switch_20"];export{e as Switch_0,t as Switch_1,d as Switch_10,v as Switch_11,h as Switch_12,m as Switch_13,p as Switch_14,b as Switch_15,u as Switch_16,w as Switch_17,f as Switch_18,k as Switch_19,i as Switch_2,x as Switch_20,s as Switch_3,c as Switch_4,n as Switch_5,l as Switch_6,o as Switch_7,r as Switch_8,a as Switch_9,Ae as __namedExportsOrder,qe as default};
