const z={title:"Components/SelectInput",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container">
    <label for="exampleSelect">Default select example</label>
    <select class="select-input-field" id="exampleSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container">
    <label for="exampleSelectChecked">Selected select example</label>
    <select class="select-input-field" id="exampleSelectChecked">
      <option value="" disabled=""></option>
      <option value="1">One</option>
      <option value="2" selected="">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container select-input-container-outlined">
    <label for="exampleOutlinedSelect">Outlined select example</label>
    <select class="select-input-field" id="exampleOutlinedSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="use-rounded-corner-inputs">
  <div class="select-input mb-medium">
    <div class="select-input-container">
      <label for="exampleRoundedSelect">Rounded select example</label>
      <select class="select-input-field" id="exampleRoundedSelect">
        <option value="" disabled="" selected=""></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
  <div class="select-input">
    <div class="select-input-container select-input-container-outlined">
      <label for="exampleRoundedOutlinedSelect">Rounded outlined select example</label>
      <select class="select-input-field" id="exampleRoundedOutlinedSelect">
        <option value="" disabled="" selected=""></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> 
<div class="select-input mb-medium">
  <div class="select-input-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <label for="exampleLeadingSelect">Select example with leading icon</label>
    <select class="select-input-field" id="exampleLeadingSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div>
<div class="select-input">
  <div class="select-input-container select-input-container-outlined">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <label for="exampleLeadingOutlinedSelect">Outlined select example with leading icon</label>
    <select class="select-input-field" id="exampleLeadingOutlinedSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container">
    <label for="exampleSelectWithHelper">Select example with helper text</label>
    <select class="select-input-field" id="exampleSelectWithHelper" aria-describedby="selectTextHelper">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="selectTextHelper" class="helper-text">
    Helper text.
  </p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input mb-medium">
  <div class="select-input-container">
    <label id="labelSelectWithHelperAndLink" for="exampleSelectWithHelperAndLink">Select example with helper and link texts</label>
    <select class="select-input-field" id="exampleSelectWithHelperAndLink" aria-describedby="selectTextHelpBlock">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="selectTextHelpBlock" class="helper-text">
    Choose a number.
  </p>
  <a href="#" id="selectTextLinkBlock" aria-labelledby="selectTextLinkBlock labelSelectWithHelperAndLink" class="link link-small">
    More information <span class="visually-hidden">about the</span>
  </a>
</div>
<div class="select-input">
  <div class="select-input-container">
    <label id="labelSelectWithLink" for="exampleSelectWithLink">Select example with link text</label>
    <select class="select-input-field" id="exampleSelectWithLink">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <a href="#" id="selectTextLink" aria-labelledby="selectTextLink labelSelectWithLink" class="link link-small">
    More information <span class="visually-hidden">about the</span>
  </a>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input component-max-width">
  <div class="select-input-container">
    <label for="exampleSelectMaxWidth">Select example max width</label>
    <select class="select-input-field" id="exampleSelectMaxWidth" aria-describedby="selectMaxWidthHelper">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="selectMaxWidthHelper" class="helper-text">
    Helper text.
  </p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input mb-medium">
  <div class="select-input-container">
    <label for="exampleDisabledSelect">Disabled select example</label>
    <select disabled="" class="select-input-field" id="exampleDisabledSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div>
<div class="select-input">
  <div class="select-input-container select-input-container-outlined">
    <label for="exampleOutlinedDisabledSelect">Disabled outlined select example</label>
    <select disabled="" class="select-input-field" id="exampleOutlinedDisabledSelect">
      <option value="" disabled=""></option>
      <option value="1">One</option>
      <option value="2" selected="">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input mb-medium">
  <div class="select-input-container">
    <label id="labelErrorSelect" for="exampleErrorSelect">Select example with error</label>
    <select class="select-input-field is-invalid" id="exampleErrorSelect" aria-describedby="numberFeedback">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="numberHelpText" class="helper-text">
    Choose a number.
  </p>
  <p id="numberFeedback" class="error-text">
    A number is required.
  </p>
  <a href="#" id="numberLink" aria-labelledby="numberLink labelErrorSelect" class="link link-small">
    More information <span class="visually-hidden">about the</span>
  </a>
</div>
<div class="was-validated">
  <div class="select-input mb-medium">
    <div class="select-input-container">
      <label id="labelErrorValidatedSelect" for="exampleErrorValidatedSelect">Select example with validated error</label>
      <select class="select-input-field is-invalid" id="exampleErrorValidatedSelect" aria-describedby="validatedNumberFeedback">
        <option value="" disabled="" selected=""></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <p id="validatedNumberHelpText" class="helper-text">
      Choose a number.
    </p>
    <p id="validatedNumberFeedback" class="error-text">
      A number is required.
    </p>
    <a href="#" id="validatedNumberLink" aria-labelledby="validatedNumberLink labelErrorValidatedSelect" class="link link-small">
      More information <span class="visually-hidden">about the</span>
    </a>
  </div>
</div>
<div class="select-input mb-medium">
  <div class="select-input-container select-input-container-outlined">
    <label id="labelErrorSelect2" for="exampleErrorSelect2">Outlined select example with error</label>
    <select class="select-input-field is-invalid" id="exampleErrorSelect2" aria-describedby="numberFeedback2">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="numberHelpText2" class="helper-text">
    Choose a number.
  </p>
  <p id="numberFeedback2" class="error-text">
    A number is required.
  </p>
</div>
<div class="select-input mb-medium">
  <div class="select-input-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <label id="labelErrorSelect3" for="exampleErrorSelect3">Select example with error and icon</label>
    <select class="select-input-field is-invalid" id="exampleErrorSelect3" aria-describedby="numberFeedback3">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="numberHelpText3" class="helper-text">
    Choose a number.
  </p>
  <p id="numberFeedback3" class="error-text">
    A number is required.
  </p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container">
    <label for="exampleGroupSelect">Grouped select example</label>
    <select class="select-input-field" id="exampleGroupSelect">
      <option value="" disabled="" selected=""></option>
      <optgroup label="First category">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </optgroup>
      <optgroup label="Second category">
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
      </optgroup>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var p,u,v;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container">
    <label for="exampleSelect">Default select example</label>
    <select class="select-input-field" id="exampleSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(v=(u=e.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,m,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container">
    <label for="exampleSelectChecked">Selected select example</label>
    <select class="select-input-field" id="exampleSelectChecked">
      <option value="" disabled=""></option>
      <option value="1">One</option>
      <option value="2" selected="">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var f,h,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container select-input-container-outlined">
    <label for="exampleOutlinedSelect">Outlined select example</label>
    <select class="select-input-field" id="exampleOutlinedSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var k,T,g;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="use-rounded-corner-inputs">
  <div class="select-input mb-medium">
    <div class="select-input-container">
      <label for="exampleRoundedSelect">Rounded select example</label>
      <select class="select-input-field" id="exampleRoundedSelect">
        <option value="" disabled="" selected=""></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
  <div class="select-input">
    <div class="select-input-container select-input-container-outlined">
      <label for="exampleRoundedOutlinedSelect">Rounded outlined select example</label>
      <select class="select-input-field" id="exampleRoundedOutlinedSelect">
        <option value="" disabled="" selected=""></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(g=(T=n.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var y,E,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> 
<div class="select-input mb-medium">
  <div class="select-input-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <label for="exampleLeadingSelect">Select example with leading icon</label>
    <select class="select-input-field" id="exampleLeadingSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div>
<div class="select-input">
  <div class="select-input-container select-input-container-outlined">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <label for="exampleLeadingOutlinedSelect">Outlined select example with leading icon</label>
    <select class="select-input-field" id="exampleLeadingOutlinedSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var L,O,W;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container">
    <label for="exampleSelectWithHelper">Select example with helper text</label>
    <select class="select-input-field" id="exampleSelectWithHelper" aria-describedby="selectTextHelper">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="selectTextHelper" class="helper-text">
    Helper text.
  </p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(W=(O=o.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var A,D,H;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input mb-medium">
  <div class="select-input-container">
    <label id="labelSelectWithHelperAndLink" for="exampleSelectWithHelperAndLink">Select example with helper and link texts</label>
    <select class="select-input-field" id="exampleSelectWithHelperAndLink" aria-describedby="selectTextHelpBlock">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="selectTextHelpBlock" class="helper-text">
    Choose a number.
  </p>
  <a href="#" id="selectTextLinkBlock" aria-labelledby="selectTextLinkBlock labelSelectWithHelperAndLink" class="link link-small">
    More information <span class="visually-hidden">about the</span>
  </a>
</div>
<div class="select-input">
  <div class="select-input-container">
    <label id="labelSelectWithLink" for="exampleSelectWithLink">Select example with link text</label>
    <select class="select-input-field" id="exampleSelectWithLink">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <a href="#" id="selectTextLink" aria-labelledby="selectTextLink labelSelectWithLink" class="link link-small">
    More information <span class="visually-hidden">about the</span>
  </a>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(H=(D=a.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var q,_,I;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input component-max-width">
  <div class="select-input-container">
    <label for="exampleSelectMaxWidth">Select example max width</label>
    <select class="select-input-field" id="exampleSelectMaxWidth" aria-describedby="selectMaxWidthHelper">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="selectMaxWidthHelper" class="helper-text">
    Helper text.
  </p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(I=(_=s.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var j,F,M;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input mb-medium">
  <div class="select-input-container">
    <label for="exampleDisabledSelect">Disabled select example</label>
    <select disabled="" class="select-input-field" id="exampleDisabledSelect">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div>
<div class="select-input">
  <div class="select-input-container select-input-container-outlined">
    <label for="exampleOutlinedDisabledSelect">Disabled outlined select example</label>
    <select disabled="" class="select-input-field" id="exampleOutlinedDisabledSelect">
      <option value="" disabled=""></option>
      <option value="1">One</option>
      <option value="2" selected="">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(M=(F=r.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var C,R,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input mb-medium">
  <div class="select-input-container">
    <label id="labelErrorSelect" for="exampleErrorSelect">Select example with error</label>
    <select class="select-input-field is-invalid" id="exampleErrorSelect" aria-describedby="numberFeedback">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="numberHelpText" class="helper-text">
    Choose a number.
  </p>
  <p id="numberFeedback" class="error-text">
    A number is required.
  </p>
  <a href="#" id="numberLink" aria-labelledby="numberLink labelErrorSelect" class="link link-small">
    More information <span class="visually-hidden">about the</span>
  </a>
</div>
<div class="was-validated">
  <div class="select-input mb-medium">
    <div class="select-input-container">
      <label id="labelErrorValidatedSelect" for="exampleErrorValidatedSelect">Select example with validated error</label>
      <select class="select-input-field is-invalid" id="exampleErrorValidatedSelect" aria-describedby="validatedNumberFeedback">
        <option value="" disabled="" selected=""></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <p id="validatedNumberHelpText" class="helper-text">
      Choose a number.
    </p>
    <p id="validatedNumberFeedback" class="error-text">
      A number is required.
    </p>
    <a href="#" id="validatedNumberLink" aria-labelledby="validatedNumberLink labelErrorValidatedSelect" class="link link-small">
      More information <span class="visually-hidden">about the</span>
    </a>
  </div>
</div>
<div class="select-input mb-medium">
  <div class="select-input-container select-input-container-outlined">
    <label id="labelErrorSelect2" for="exampleErrorSelect2">Outlined select example with error</label>
    <select class="select-input-field is-invalid" id="exampleErrorSelect2" aria-describedby="numberFeedback2">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="numberHelpText2" class="helper-text">
    Choose a number.
  </p>
  <p id="numberFeedback2" class="error-text">
    A number is required.
  </p>
</div>
<div class="select-input mb-medium">
  <div class="select-input-container">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <label id="labelErrorSelect3" for="exampleErrorSelect3">Select example with error and icon</label>
    <select class="select-input-field is-invalid" id="exampleErrorSelect3" aria-describedby="numberFeedback3">
      <option value="" disabled="" selected=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <p id="numberHelpText3" class="helper-text">
    Choose a number.
  </p>
  <p id="numberFeedback3" class="error-text">
    A number is required.
  </p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var B,V,G;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="select-input">
  <div class="select-input-container">
    <label for="exampleGroupSelect">Grouped select example</label>
    <select class="select-input-field" id="exampleGroupSelect">
      <option value="" disabled="" selected=""></option>
      <optgroup label="First category">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </optgroup>
      <optgroup label="Second category">
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
      </optgroup>
    </select>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(G=(V=d.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const J=["SelectInput_0","SelectInput_1","SelectInput_2","SelectInput_3","SelectInput_4","SelectInput_5","SelectInput_6","SelectInput_7","SelectInput_8","SelectInput_9","SelectInput_10"];export{e as SelectInput_0,l as SelectInput_1,d as SelectInput_10,t as SelectInput_2,n as SelectInput_3,i as SelectInput_4,o as SelectInput_5,a as SelectInput_6,s as SelectInput_7,r as SelectInput_8,c as SelectInput_9,J as __namedExportsOrder,z as default};
