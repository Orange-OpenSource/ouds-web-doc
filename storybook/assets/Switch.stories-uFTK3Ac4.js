const de={title:"Components/Switch",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDefault">Default switch</label>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input checked="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDefault2">Checked switch</label>
  </div>
</div> </div>
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
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDivider">Default switch with divider</label>
  </div>
</div>
<div class="switch-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider2" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDivider2">Checked switch with divider</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithSVG">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchWithSVG">Default switch with an SVG icon</label>
  </div>
  <div class="control-item-assets-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithIconFont" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchWithIconFont">Checked switch with a font-icon</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchHelperTextDescription" id="switchHelperText" value="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchHelperText">Default switch</label>
    <p class="control-item-helper" id="switchHelperTextDescription">Helper text</p>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchHelperTextDescription2" id="switchHelperText2" value="" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchHelperText2">Checked switch</label>
    <p class="control-item-helper" id="switchHelperTextDescription2">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayout1" aria-describedby="switchLayout1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchLayout1">Label</label>
        <p class="control-item-helper" id="switchLayout1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayout2" checked="" aria-describedby="switchLayout2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchLayout2">A longer label for showing behavior in this case, switch indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="switchLayout2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="switch-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayoutRev1" aria-describedby="switchLayoutRev1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchLayoutRev1">Label with reverse layout</label>
        <p class="control-item-helper" id="switchLayoutRev1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="switch-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayoutRev2" checked="" aria-describedby="switchLayoutRev2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchLayoutRev2">A longer label with reverse layout for showing behavior in this case, switch indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="switchLayoutRev2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
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
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDisabled">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDisabled">Default disabled switch</label>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchCheckedDisabled" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchCheckedDisabled">Checked disabled switch</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
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
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="switchReadonlyLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="switchReadonlyLabel">Default readonly switch</p>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="switchReadonlyCheckedLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="switchReadonlyCheckedLabel">Checked readonly switch</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,v=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalid" aria-describedby="switchInvalidDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchInvalid">Default invalid switch</label>
    <p class="control-item-helper" id="switchInvalidDescription">Helper text</p>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalid2" aria-describedby="switchInvalid2Description" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchInvalid2">Checked invalid switch</label>
    <p class="control-item-helper" id="switchInvalid2Description">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid" role="switch">
  <label class="form-check-label" for="checkInvalid">
    Default invalid switch (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <fieldset class="col-md-6">
    <legend>Switches group example</legend>
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup1" aria-describedby="switchGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchGroup1">Group switch 1</label>
        <p class="control-item-helper" id="switchGroup1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup2" checked="" aria-describedby="switchGroup2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchGroup2">Group switch 2</label>
        <p class="control-item-helper" id="switchGroup2Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value="">
  <span class="visually-hidden">Standalone switch</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
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
<\/script>`;var u,w,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDefault">Default switch</label>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input checked="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDefault2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDefault2">Checked switch</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(f=(w=e.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var k,x,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
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
<\/script>\``,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,D,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDivider">Default switch with divider</label>
  </div>
</div>
<div class="switch-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDivider2" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDivider2">Checked switch with divider</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var L,E,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithSVG">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchWithSVG">Default switch with an SVG icon</label>
  </div>
  <div class="control-item-assets-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithIconFont" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchWithIconFont">Checked switch with a font-icon</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(C=(E=s.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var A,W,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchHelperTextDescription" id="switchHelperText" value="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchHelperText">Default switch</label>
    <p class="control-item-helper" id="switchHelperTextDescription">Helper text</p>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" role="switch" aria-describedby="switchHelperTextDescription2" id="switchHelperText2" value="" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchHelperText2">Checked switch</label>
    <p class="control-item-helper" id="switchHelperTextDescription2">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var j,q,H;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayout1" aria-describedby="switchLayout1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchLayout1">Label</label>
        <p class="control-item-helper" id="switchLayout1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayout2" checked="" aria-describedby="switchLayout2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchLayout2">A longer label for showing behavior in this case, switch indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="switchLayout2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(H=(q=l.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var R,G,I;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="switch-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayoutRev1" aria-describedby="switchLayoutRev1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchLayoutRev1">Label with reverse layout</label>
        <p class="control-item-helper" id="switchLayoutRev1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="switch-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchLayoutRev2" checked="" aria-describedby="switchLayoutRev2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchLayoutRev2">A longer label with reverse layout for showing behavior in this case, switch indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="switchLayoutRev2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(I=(G=n.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var T,B,N;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckReverse" checked="">
  <label class="form-check-label" for="switchCheckReverse">Reverse switch (Bootstrap compatible)</label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(N=(B=o.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var V,F,O;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchDisabled">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchDisabled">Default disabled switch</label>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" role="switch" value="" id="switchCheckedDisabled" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchCheckedDisabled">Checked disabled switch</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(O=(F=r.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var z,J,K;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
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
<\/script>\``,...(K=(J=a.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,P,Q;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="switchReadonlyLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="switchReadonlyLabel">Default readonly switch</p>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="switch" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="switchReadonlyCheckedLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="switchReadonlyCheckedLabel">Checked readonly switch</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalid" aria-describedby="switchInvalidDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchInvalid">Default invalid switch</label>
    <p class="control-item-helper" id="switchInvalidDescription">Helper text</p>
  </div>
</div>
<div class="switch-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" role="switch" value="" id="switchInvalid2" aria-describedby="switchInvalid2Description" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="switchInvalid2">Checked invalid switch</label>
    <p class="control-item-helper" id="switchInvalid2Description">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-switch">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid" role="switch">
  <label class="form-check-label" for="checkInvalid">
    Default invalid switch (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ie,se;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <fieldset class="col-md-6">
    <legend>Switches group example</legend>
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup1" aria-describedby="switchGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchGroup1">Group switch 1</label>
        <p class="control-item-helper" id="switchGroup1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="switch-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchGroup2" checked="" aria-describedby="switchGroup2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="switchGroup2">Group switch 2</label>
        <p class="control-item-helper" id="switchGroup2Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
  </fieldset>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(se=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,le,ne;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="switch-standalone">
  <input class="control-item-indicator" type="checkbox" role="switch" value="">
  <span class="visually-hidden">Standalone switch</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ne=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var oe,re,ae;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="switch-item">
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
<\/script>\``,...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const ve=["Switch_0","Switch_1","Switch_2","Switch_3","Switch_4","Switch_5","Switch_6","Switch_7","Switch_8","Switch_9","Switch_10","Switch_11","Switch_12","Switch_13","Switch_14","Switch_15"];export{e as Switch_0,t as Switch_1,d as Switch_10,v as Switch_11,h as Switch_12,p as Switch_13,m as Switch_14,b as Switch_15,i as Switch_2,s as Switch_3,c as Switch_4,l as Switch_5,n as Switch_6,o as Switch_7,r as Switch_8,a as Switch_9,ve as __namedExportsOrder,de as default};
