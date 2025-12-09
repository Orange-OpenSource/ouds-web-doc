const ue={title:"Components/Checkbox",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDefault">Default checkbox</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input checked="" class="control-item-indicator" type="checkbox" value="" id="checkboxDefault2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDefault2">Checked checkbox</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default checkbox (Bootstrap compatible)
  </label>
</div>
<div class="form-check">
  <input checked="" class="form-check-input" type="checkbox" value="" id="checkChecked">
  <label class="form-check-label" for="checkChecked">
  Checked checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="checkbox-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDivider">Default checkbox with divider</label>
  </div>
</div>
<div class="checkbox-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDivider2" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDivider2">Checked checkbox with divider</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxWithSVG">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxWithSVG">Default checkbox with an SVG icon</label>
  </div>
  <div class="control-item-assets-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxWithIconFont" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxWithIconFont">Checked checkbox with a font-icon</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" aria-describedby="checkboxHelperTextDescription" id="checkboxHelperText" value="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxHelperText">Default checkbox</label>
    <p class="control-item-helper" id="checkboxHelperTextDescription">Helper text</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" aria-describedby="checkboxHelperTextDescription2" id="checkboxHelperText2" value="" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxHelperText2">Checked checkbox</label>
    <p class="control-item-helper" id="checkboxHelperTextDescription2">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayout1" aria-describedby="checboxLayout1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayout1">Label</label>
        <p class="control-item-helper" id="checboxLayout1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayout2" aria-describedby="checboxLayout2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayout2">A short label</label>
        <p class="control-item-helper" id="checboxLayout2Description">A longer helper text that can wrap to another line to show the behaviour</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayout3" aria-describedby="checboxLayout3Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayout3">A longer label for showing behavior in this case, checkbox indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="checboxLayout3Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
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
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="checkbox-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayoutRev1" aria-describedby="checboxLayoutRev1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayoutRev1">Label with reverse layout</label>
        <p class="control-item-helper" id="checboxLayoutRev1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="checkbox-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayoutRev2" aria-describedby="checboxLayoutRev2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayoutRev2">A longer label with reverse layout for showing behavior in this case, checkbox indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="checboxLayoutRev2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
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
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck" checked="">
  <label class="form-check-label" for="reverseCheck">
    Checked reverse checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxIndeterminate">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxIndeterminate">Indeterminate checkbox</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate">
  <label class="form-check-label" for="checkIndeterminate">
    Indeterminate checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" value="" id="checkboxDisabled">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDisabled">Default disabled checkbox</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" value="" id="checkboxCheckedDisabled" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxCheckedDisabled">Checked disabled checkbox</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" value="" id="checkboxIndeterminateDisabled">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxIndeterminateDisabled">Indeterminate disabled checkbox</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> 
<div class="form-check">
  <input disabled="" class="form-check-input" type="checkbox" value="" id="checkDisabled">
  <label class="form-check-label" for="checkDisabled">
    Default disabled checkbox (Bootstrap compatible)
  </label>
</div>
<div class="form-check">
  <input disabled="" class="form-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked="">
  <label class="form-check-label" for="checkCheckedDisabled">
    Checked disabled checkbox (Bootstrap compatible)
  </label>
</div>
<div class="form-check">
  <input disabled="" class="form-check-input" type="checkbox" value="" id="checkIndeterminateDisabled">
  <label class="form-check-label" for="checkIndeterminateDisabled">
    Indeterminate disabled checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,v=()=>`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="checkboxReadonlyLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="checkboxReadonlyLabel">Default readonly checkbox</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="checkboxReadonlyCheckedLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="checkboxReadonlyCheckedLabel">Checked readonly checkbox</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="mixed" aria-labelledby="checkboxReadonlyIndeterminate"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="checkboxReadonlyIndeterminate">Indeterminate readonly checkbox</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" value="" id="checkboxInvalid" aria-describedby="checkboxInvalidDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxInvalid">Default invalid checkbox</label>
    <p class="control-item-helper" id="checkboxInvalidDescription">Helper text</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" value="" id="checkboxInvalid2" aria-describedby="checkboxInvalid2Description" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxInvalid2">Checked invalid checkbox</label>
    <p class="control-item-helper" id="checkboxInvalid2Description">Helper text</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" value="" id="checkboxInvalidIndeterminate" aria-describedby="checkboxInvalidIndeterminateDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxInvalidIndeterminate">Indeterminate invalid checkbox</label>
    <p class="control-item-helper" id="checkboxInvalidIndeterminateDescription">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="form-check">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid">
  <label class="form-check-label" for="checkInvalid">
    Default invalid checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <fieldset class="col-md-6">
    <legend>Checkboxes group example</legend>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checkboxGroup1" aria-describedby="checkboxGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checkboxGroup1">Group checkbox 1</label>
        <p class="control-item-helper" id="checkboxGroup1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checkboxGroup2" aria-describedby="checkboxGroup2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checkboxGroup2">Group checkbox 2</label>
        <p class="control-item-helper" id="checkboxGroup2Description">Helper text</p>
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
<\/script>`,k=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value="">
  <span class="visually-hidden">Standalone checkbox</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,x=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div style="position: relative">
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="Standalone checkbox (Bootstrap compatible)">
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var u,f,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDefault">Default checkbox</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input checked="" class="control-item-indicator" type="checkbox" value="" id="checkboxDefault2">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDefault2">Checked checkbox</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,D,L;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default checkbox (Bootstrap compatible)
  </label>
</div>
<div class="form-check">
  <input checked="" class="form-check-input" type="checkbox" value="" id="checkChecked">
  <label class="form-check-label" for="checkChecked">
  Checked checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var C,E,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="checkbox-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDivider">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDivider">Default checkbox with divider</label>
  </div>
</div>
<div class="checkbox-item control-item-divider">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxDivider2" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDivider2">Checked checkbox with divider</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(I=(E=t.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var S,w,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxWithSVG">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxWithSVG">Default checkbox with an SVG icon</label>
  </div>
  <div class="control-item-assets-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxWithIconFont" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxWithIconFont">Checked checkbox with a font-icon</label>
  </div>
  <div class="control-item-assets-container">
    <span class="icon si si-settings" aria-hidden="true"></span>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var W,_,j;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" aria-describedby="checkboxHelperTextDescription" id="checkboxHelperText" value="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxHelperText">Default checkbox</label>
    <p class="control-item-helper" id="checkboxHelperTextDescription">Helper text</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" aria-describedby="checkboxHelperTextDescription2" id="checkboxHelperText2" value="" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxHelperText2">Checked checkbox</label>
    <p class="control-item-helper" id="checkboxHelperTextDescription2">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(j=(_=i.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var q,H,R;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayout1" aria-describedby="checboxLayout1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayout1">Label</label>
        <p class="control-item-helper" id="checboxLayout1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayout2" aria-describedby="checboxLayout2Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayout2">A short label</label>
        <p class="control-item-helper" id="checboxLayout2Description">A longer helper text that can wrap to another line to show the behaviour</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayout3" aria-describedby="checboxLayout3Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayout3">A longer label for showing behavior in this case, checkbox indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="checboxLayout3Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
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
<\/script>\``,...(R=(H=n.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var G,B,T;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <div class="col-8 col-md-6 col-xl-5">
    <div class="checkbox-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayoutRev1" aria-describedby="checboxLayoutRev1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayoutRev1">Label with reverse layout</label>
        <p class="control-item-helper" id="checboxLayoutRev1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="checkbox-item control-item-divider control-item-reverse">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checboxLayoutRev2" aria-describedby="checboxLayoutRev2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checboxLayoutRev2">A longer label with reverse layout for showing behavior in this case, checkbox indicator and icon will stick to the top area of the component</label>
        <p class="control-item-helper" id="checboxLayoutRev2Description">Also a longer helper text, it will also wrap at some point depending on the component width</p>
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
<\/script>\``,...(T=(B=a.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var V,F,N;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck" checked="">
  <label class="form-check-label" for="reverseCheck">
    Checked reverse checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(N=(F=l.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var O,z,J;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator" type="checkbox" value="" id="checkboxIndeterminate">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxIndeterminate">Indeterminate checkbox</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(J=(z=r.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,M,P;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate">
  <label class="form-check-label" for="checkIndeterminate">
    Indeterminate checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(P=(M=s.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var Q,U,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" value="" id="checkboxDisabled">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxDisabled">Default disabled checkbox</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" value="" id="checkboxCheckedDisabled" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxCheckedDisabled">Checked disabled checkbox</label>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input disabled="" class="control-item-indicator" type="checkbox" value="" id="checkboxIndeterminateDisabled">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxIndeterminateDisabled">Indeterminate disabled checkbox</label>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> 
<div class="form-check">
  <input disabled="" class="form-check-input" type="checkbox" value="" id="checkDisabled">
  <label class="form-check-label" for="checkDisabled">
    Default disabled checkbox (Bootstrap compatible)
  </label>
</div>
<div class="form-check">
  <input disabled="" class="form-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked="">
  <label class="form-check-label" for="checkCheckedDisabled">
    Checked disabled checkbox (Bootstrap compatible)
  </label>
</div>
<div class="form-check">
  <input disabled="" class="form-check-input" type="checkbox" value="" id="checkIndeterminateDisabled">
  <label class="form-check-label" for="checkIndeterminateDisabled">
    Indeterminate disabled checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ce,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="false" aria-labelledby="checkboxReadonlyLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="checkboxReadonlyLabel">Default readonly checkbox</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="true" aria-labelledby="checkboxReadonlyCheckedLabel"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="checkboxReadonlyCheckedLabel">Checked readonly checkbox</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <span class="control-item-indicator" role="checkbox" aria-readonly="true" aria-disabled="true" tabindex="0" aria-checked="mixed" aria-labelledby="checkboxReadonlyIndeterminate"></span>
  </div>
  <div class="control-item-text-container">
    <p class="control-item-label" id="checkboxReadonlyIndeterminate">Indeterminate readonly checkbox</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(te=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:te.source}}};var oe,ie,ne;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" value="" id="checkboxInvalid" aria-describedby="checkboxInvalidDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxInvalid">Default invalid checkbox</label>
    <p class="control-item-helper" id="checkboxInvalidDescription">Helper text</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" value="" id="checkboxInvalid2" aria-describedby="checkboxInvalid2Description" checked="">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxInvalid2">Checked invalid checkbox</label>
    <p class="control-item-helper" id="checkboxInvalid2Description">Helper text</p>
  </div>
</div>
<div class="checkbox-item">
  <div class="control-item-assets-container">
    <input class="control-item-indicator is-invalid" type="checkbox" value="" id="checkboxInvalidIndeterminate" aria-describedby="checkboxInvalidIndeterminateDescription">
  </div>
  <div class="control-item-text-container">
    <label class="control-item-label" for="checkboxInvalidIndeterminate">Indeterminate invalid checkbox</label>
    <p class="control-item-helper" id="checkboxInvalidIndeterminateDescription">Helper text</p>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ne=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ae,le,re;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none bd-example-indeterminate m-none border-none"> <div class="form-check">
  <input class="form-check-input is-invalid" type="checkbox" value="" id="checkInvalid">
  <label class="form-check-label" for="checkInvalid">
    Default invalid checkbox (Bootstrap compatible)
  </label>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(re=(le=h.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,de,be;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="row">
  <fieldset class="col-md-6">
    <legend>Checkboxes group example</legend>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checkboxGroup1" aria-describedby="checkboxGroup1Description">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checkboxGroup1">Group checkbox 1</label>
        <p class="control-item-helper" id="checkboxGroup1Description">Helper text</p>
      </div>
      <div class="control-item-assets-container">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
        </svg>
      </div>
    </div>
    <div class="checkbox-item control-item-divider">
      <div class="control-item-assets-container">
        <input class="control-item-indicator" type="checkbox" value="" id="checkboxGroup2" aria-describedby="checkboxGroup2Description" checked="">
      </div>
      <div class="control-item-text-container">
        <label class="control-item-label" for="checkboxGroup2">Group checkbox 2</label>
        <p class="control-item-helper" id="checkboxGroup2Description">Helper text</p>
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
<\/script>\``,...(be=(de=m.parameters)==null?void 0:de.docs)==null?void 0:be.source}}};var ve,pe,he;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <label class="checkbox-standalone">
  <input class="control-item-indicator" type="checkbox" value="">
  <span class="visually-hidden">Standalone checkbox</span>
</label> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(he=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var me,ke,xe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div style="position: relative">
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="Standalone checkbox (Bootstrap compatible)">
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(xe=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};const fe=["Checkbox_0","Checkbox_1","Checkbox_2","Checkbox_3","Checkbox_4","Checkbox_5","Checkbox_6","Checkbox_7","Checkbox_8","Checkbox_9","Checkbox_10","Checkbox_11","Checkbox_12","Checkbox_13","Checkbox_14","Checkbox_15","Checkbox_16","Checkbox_17"];export{e as Checkbox_0,c as Checkbox_1,d as Checkbox_10,b as Checkbox_11,v as Checkbox_12,p as Checkbox_13,h as Checkbox_14,m as Checkbox_15,k as Checkbox_16,x as Checkbox_17,t as Checkbox_2,o as Checkbox_3,i as Checkbox_4,n as Checkbox_5,a as Checkbox_6,l as Checkbox_7,r as Checkbox_8,s as Checkbox_9,fe as __namedExportsOrder,ue as default};
