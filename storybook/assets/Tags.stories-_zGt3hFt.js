const we={title:"Components/Tags",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <p class="tag">Tag</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <button type="button" class="tag tag-input">Input tag<span class="visually-hidden">Remove this tag</span></button> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="d-inline-flex align-items-center">
  <h4 id="tagsTitle" class="h6 me-small">Mobile coverage: </h4>
  <div role="group" aria-labelledby="tagsTitle">
    <ul class="list-unstyled d-flex column-gap-xsmall">
      <li class="tag">Roaming</li>
      <li class="tag">5G Ready</li>
      <li class="tag">4G</li>
    </ul>
  </div>
</div>
 </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex column-gap-xsmall" aria-label="Mobile coverage">
  <li class="tag">Roaming</li>
  <li class="tag">5G Ready</li>
  <li class="tag">4G</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Non-functional emphasized tags (default)">
  <li class="tag">Neutral emphasized (default)</li>
  <li class="tag tag-accent">Accent emphasized</li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Non-functional muted tags">
  <li class="tag tag-muted">Neutral muted</li>
  <li class="tag tag-accent tag-muted">Accent muted</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Functional emphasized tags (default)">
  <li class="tag tag-positive">Positive emphasized</li>
  <li class="tag tag-info">Info emphasized</li>
  <li class="tag tag-warning">Warning emphasized</li>
  <li class="tag tag-negative">Negative emphasized</li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Functional muted tags">
  <li class="tag tag-positive tag-muted">Positive muted</li>
  <li class="tag tag-info tag-muted">Info muted</li>
  <li class="tag tag-warning tag-muted">Warning muted</li>
  <li class="tag tag-negative tag-muted">Negative muted</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Non-functional emphasized icons">
  <li class="tag">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Neutral emphasized (default)
  </li>
  <li class="tag tag-accent">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Accent emphasized
  </li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Non-functional muted icons">
  <li class="tag tag-muted">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Neutral muted
  </li>
  <li class="tag tag-accent tag-muted">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Accent muted
  </li>
</ul>
<p class="tag">
  <span class="si-settings tag-icon" aria-hidden="true"></span>
  Settings
</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Functional emphasized icons">
  <li class="tag tag-positive">
    <span class="tag-status-icon"></span>
    Activated
  </li>
  <li class="tag tag-info">
    <span class="tag-status-icon"></span>
    Coming soon
  </li>
  <li class="tag tag-warning">
    <span class="tag-status-icon"></span>
    Under maintenance
  </li>
  <li class="tag tag-negative">
    <span class="tag-status-icon"></span>
    Error
  </li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Functional muted icons">
  <li class="tag tag-positive tag-muted">
    <span class="tag-status-icon"></span>
    <span class="visually-hidden">Success</span>
    Tested
  </li>
  <li class="tag tag-info tag-muted">
    <span class="tag-status-icon"></span>
    <span class="visually-hidden">Info</span>
    Manually tested
  </li>
  <li class="tag tag-warning tag-muted">
    <span class="tag-status-icon"></span>
    <span class="visually-hidden">Caution</span>
    Not tested
  </li>
  <li class="tag tag-negative tag-muted">
    <span class="tag-status-icon"></span>
    <span class="visually-hidden">Error</span>
    Tested
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Emphasized bullet tag examples">
  <li class="tag">
    <span class="tag-bullet"></span>
    Neutral
  </li>
  <li class="tag tag-accent">
    <span class="tag-bullet"></span>
    Accent
  </li>
  <li class="tag tag-positive">
    <span class="tag-bullet"></span>
    Positive
  </li>
  <li class="tag tag-info">
    <span class="tag-bullet"></span>
    Info
  </li>
  <li class="tag tag-warning">
    <span class="tag-bullet"></span>
    Warning
  </li>
  <li class="tag tag-negative">
    <span class="tag-bullet"></span>
    Negative
  </li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Emphasized bullet tag examples">
  <li class="tag tag-muted">
    <span class="tag-bullet"></span>
    Neutral
  </li>
  <li class="tag tag-accent tag-muted">
    <span class="tag-bullet"></span>
    Accent
  </li>
  <li class="tag tag-positive tag-muted">
    <span class="tag-bullet"></span>
    Positive
  </li>
  <li class="tag tag-info tag-muted">
    <span class="tag-bullet"></span>
    Info
  </li>
  <li class="tag tag-warning tag-muted">
    <span class="tag-bullet"></span>
    Warning
  </li>
  <li class="tag tag-negative tag-muted">
    <span class="tag-bullet"></span>
    Negative
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Keywords">
  <li class="tag tag-accent rounded-none">Squared accent emphasized</li>
  <li class="tag tag-info tag-muted rounded-none">Squared info muted</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="disabled mb-medium">
  <p><span class="tag tag-accent">Disabled</span> Some text</p>
</div>
<p class="disabled"><span class="tag tag-accent">Disabled</span> Some text</p>
<p><span class="tag tag-accent disabled">Disabled</span> Some text</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,g=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <p class="tag tag-accent">
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="tag-loader" aria-hidden="true">
    <circle class="tag-loader-inner" cx="20" cy="20" r="15"></circle>
  </svg>
  <span role="status" class="visually-hidden d-none">Loading</span>
  Label
</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <p class="tag tag-accent loading">
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="tag-loader" aria-hidden="true">
    <circle class="tag-loader-inner" cx="20" cy="20" r="15"></circle>
  </svg>
  <span role="status" class="visually-hidden">Loading</span>
  Label
</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Mobile coverage">
  <li class="tag tag-small">Small neutral</li>
  <li class="tag tag-small">
    <span class="tag-bullet"></span>
    Roaming
  </li>
  <li class="tag tag-small">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    5G Ready
  </li>
  <li class="tag tag-small">
      <span class="si-settings tag-icon" aria-hidden="true"></span>
      Settings
  </li>
  <li class="tag tag-accent tag-small loading">
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="tag-loader" aria-hidden="true">
      <circle class="tag-loader-inner" cx="20" cy="20" r="15"></circle>
    </svg>
    <span role="status" class="visually-hidden">Loading</span>
    ...
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex column-gap-xsmall" aria-label="Mobile coverage">
  <li class="tag">Roaming</li>
  <li class="tag">5G Ready</li>
  <li class="tag">4G</li>
</ul>
<ul class="list-unstyled d-flex column-gap-xsmall" aria-label="Mobile coverage">
  <li class="tag tag-small">Roaming</li>
  <li class="tag tag-small">5G Ready</li>
</ul>
<h2>Title <span class="tag align-middle">Coming soon</span></h2>
<h2>Title <span class="tag tag-small align-middle">Coming soon</span></h2>
<p><span class="tag">New</span> Some text</p>
<p><span class="tag tag-small">New</span> Some text</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,v=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap col-4 column-gap-xsmall row-gap-medium" aria-label="Keywords">
  <li class="tag">Label 1</li>
  <li class="tag">Label 2</li>
  <li class="tag">Label 3</li>
  <li class="tag">Label 4</li>
  <li class="tag">Label 5</li>
  <li class="tag">Label 6</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall" aria-label="Selected mobile coverage">
  <li>
    <button type="button" class="tag tag-input">
      Roaming
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
  <li>
    <button type="button" class="tag tag-input">
      5G Ready
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
  <li>
    <button type="button" class="tag tag-input">
        4G
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,f=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall" aria-label="Selected mobile coverage">
  <li>
    <button type="button" class="tag tag-input" disabled="">
      Roaming
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
  <li>
    <button type="button" class="tag tag-input" disabled="">
      5G
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
  <li>
    <button type="button" class="tag tag-input" disabled="">
      4G
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap col-4 column-gap-xsmall" aria-label="Selected keywords">
  <li><button type="button" class="tag tag-input">Label 1<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 2<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 3<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 4<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 5<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 6<span class="visually-hidden">Remove this tag</span></button></li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var x,y,k;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <p class="tag">Tag</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(k=(y=e.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var w,E,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <button type="button" class="tag tag-input">Input tag<span class="visually-hidden">Remove this tag</span></button> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var L,T,A;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="d-inline-flex align-items-center">
  <h4 id="tagsTitle" class="h6 me-small">Mobile coverage: </h4>
  <div role="group" aria-labelledby="tagsTitle">
    <ul class="list-unstyled d-flex column-gap-xsmall">
      <li class="tag">Roaming</li>
      <li class="tag">5G Ready</li>
      <li class="tag">4G</li>
    </ul>
  </div>
</div>
 </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(A=(T=s.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var R,W,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex column-gap-xsmall" aria-label="Mobile coverage">
  <li class="tag">Roaming</li>
  <li class="tag">5G Ready</li>
  <li class="tag">4G</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var q,_,j;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Non-functional emphasized tags (default)">
  <li class="tag">Neutral emphasized (default)</li>
  <li class="tag tag-accent">Accent emphasized</li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Non-functional muted tags">
  <li class="tag tag-muted">Neutral muted</li>
  <li class="tag tag-accent tag-muted">Accent muted</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var N,z,G;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Functional emphasized tags (default)">
  <li class="tag tag-positive">Positive emphasized</li>
  <li class="tag tag-info">Info emphasized</li>
  <li class="tag tag-warning">Warning emphasized</li>
  <li class="tag tag-negative">Negative emphasized</li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Functional muted tags">
  <li class="tag tag-positive tag-muted">Positive muted</li>
  <li class="tag tag-info tag-muted">Info muted</li>
  <li class="tag tag-warning tag-muted">Warning muted</li>
  <li class="tag tag-negative tag-muted">Negative muted</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(G=(z=n.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var I,M,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Non-functional emphasized icons">
  <li class="tag">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Neutral emphasized (default)
  </li>
  <li class="tag tag-accent">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Accent emphasized
  </li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Non-functional muted icons">
  <li class="tag tag-muted">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Neutral muted
  </li>
  <li class="tag tag-accent tag-muted">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Accent muted
  </li>
</ul>
<p class="tag">
  <span class="si-settings tag-icon" aria-hidden="true"></span>
  Settings
</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(C=(M=i.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var F,P,B;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Functional emphasized icons">
  <li class="tag tag-positive">
    <span class="tag-status-icon"></span>
    Activated
  </li>
  <li class="tag tag-info">
    <span class="tag-status-icon"></span>
    Coming soon
  </li>
  <li class="tag tag-warning">
    <span class="tag-status-icon"></span>
    Under maintenance
  </li>
  <li class="tag tag-negative">
    <span class="tag-status-icon"></span>
    Error
  </li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Functional muted icons">
  <li class="tag tag-positive tag-muted">
    <span class="tag-status-icon"></span>
    <span class="visually-hidden">Success</span>
    Tested
  </li>
  <li class="tag tag-info tag-muted">
    <span class="tag-status-icon"></span>
    <span class="visually-hidden">Info</span>
    Manually tested
  </li>
  <li class="tag tag-warning tag-muted">
    <span class="tag-status-icon"></span>
    <span class="visually-hidden">Caution</span>
    Not tested
  </li>
  <li class="tag tag-negative tag-muted">
    <span class="tag-status-icon"></span>
    <span class="visually-hidden">Error</span>
    Tested
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(B=(P=r.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var K,U,O;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Emphasized bullet tag examples">
  <li class="tag">
    <span class="tag-bullet"></span>
    Neutral
  </li>
  <li class="tag tag-accent">
    <span class="tag-bullet"></span>
    Accent
  </li>
  <li class="tag tag-positive">
    <span class="tag-bullet"></span>
    Positive
  </li>
  <li class="tag tag-info">
    <span class="tag-bullet"></span>
    Info
  </li>
  <li class="tag tag-warning">
    <span class="tag-bullet"></span>
    Warning
  </li>
  <li class="tag tag-negative">
    <span class="tag-bullet"></span>
    Negative
  </li>
</ul>
<ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Emphasized bullet tag examples">
  <li class="tag tag-muted">
    <span class="tag-bullet"></span>
    Neutral
  </li>
  <li class="tag tag-accent tag-muted">
    <span class="tag-bullet"></span>
    Accent
  </li>
  <li class="tag tag-positive tag-muted">
    <span class="tag-bullet"></span>
    Positive
  </li>
  <li class="tag tag-info tag-muted">
    <span class="tag-bullet"></span>
    Info
  </li>
  <li class="tag tag-warning tag-muted">
    <span class="tag-bullet"></span>
    Warning
  </li>
  <li class="tag tag-negative tag-muted">
    <span class="tag-bullet"></span>
    Negative
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(O=(U=o.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var H,J,Q;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Keywords">
  <li class="tag tag-accent rounded-none">Squared accent emphasized</li>
  <li class="tag tag-info tag-muted rounded-none">Squared info muted</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Y;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="disabled mb-medium">
  <p><span class="tag tag-accent">Disabled</span> Some text</p>
</div>
<p class="disabled"><span class="tag tag-accent">Disabled</span> Some text</p>
<p><span class="tag tag-accent disabled">Disabled</span> Some text</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <p class="tag tag-accent">
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="tag-loader" aria-hidden="true">
    <circle class="tag-loader-inner" cx="20" cy="20" r="15"></circle>
  </svg>
  <span role="status" class="visually-hidden d-none">Loading</span>
  Label
</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,se,le;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <p class="tag tag-accent loading">
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="tag-loader" aria-hidden="true">
    <circle class="tag-loader-inner" cx="20" cy="20" r="15"></circle>
  </svg>
  <span role="status" class="visually-hidden">Loading</span>
  Label
</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(le=(se=p.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var te,ne,ie;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall row-gap-medium" aria-label="Mobile coverage">
  <li class="tag tag-small">Small neutral</li>
  <li class="tag tag-small">
    <span class="tag-bullet"></span>
    Roaming
  </li>
  <li class="tag tag-small">
    <svg aria-hidden="true" class="tag-icon">
      <use xlink:href="/orange/docs/0.6/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    5G Ready
  </li>
  <li class="tag tag-small">
      <span class="si-settings tag-icon" aria-hidden="true"></span>
      Settings
  </li>
  <li class="tag tag-accent tag-small loading">
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="tag-loader" aria-hidden="true">
      <circle class="tag-loader-inner" cx="20" cy="20" r="15"></circle>
    </svg>
    <span role="status" class="visually-hidden">Loading</span>
    ...
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ie=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var re,oe,ce;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex column-gap-xsmall" aria-label="Mobile coverage">
  <li class="tag">Roaming</li>
  <li class="tag">5G Ready</li>
  <li class="tag">4G</li>
</ul>
<ul class="list-unstyled d-flex column-gap-xsmall" aria-label="Mobile coverage">
  <li class="tag tag-small">Roaming</li>
  <li class="tag tag-small">5G Ready</li>
</ul>
<h2>Title <span class="tag align-middle">Coming soon</span></h2>
<h2>Title <span class="tag tag-small align-middle">Coming soon</span></h2>
<p><span class="tag">New</span> Some text</p>
<p><span class="tag tag-small">New</span> Some text</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ce=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,ge,pe;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap col-4 column-gap-xsmall row-gap-medium" aria-label="Keywords">
  <li class="tag">Label 1</li>
  <li class="tag">Label 2</li>
  <li class="tag">Label 3</li>
  <li class="tag">Label 4</li>
  <li class="tag">Label 5</li>
  <li class="tag">Label 6</li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(pe=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var ue,me,ve;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall" aria-label="Selected mobile coverage">
  <li>
    <button type="button" class="tag tag-input">
      Roaming
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
  <li>
    <button type="button" class="tag tag-input">
      5G Ready
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
  <li>
    <button type="button" class="tag tag-input">
        4G
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ve=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var be,fe,he;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap column-gap-xsmall" aria-label="Selected mobile coverage">
  <li>
    <button type="button" class="tag tag-input" disabled="">
      Roaming
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
  <li>
    <button type="button" class="tag tag-input" disabled="">
      5G
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
  <li>
    <button type="button" class="tag tag-input" disabled="">
      4G
      <span class="visually-hidden">Remove this tag</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(he=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var xe,ye,ke;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="list-unstyled d-flex flex-wrap col-4 column-gap-xsmall" aria-label="Selected keywords">
  <li><button type="button" class="tag tag-input">Label 1<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 2<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 3<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 4<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 5<span class="visually-hidden">Remove this tag</span></button></li>
  <li><button type="button" class="tag tag-input">Label 6<span class="visually-hidden">Remove this tag</span></button></li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ke=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};const Ee=["Tags_0","Tags_1","Tags_2","Tags_3","Tags_4","Tags_5","Tags_6","Tags_7","Tags_8","Tags_9","Tags_10","Tags_11","Tags_12","Tags_13","Tags_14","Tags_15","Tags_16","Tags_17","Tags_18"];export{e as Tags_0,a as Tags_1,d as Tags_10,g as Tags_11,p as Tags_12,u as Tags_13,m as Tags_14,v as Tags_15,b as Tags_16,f as Tags_17,h as Tags_18,s as Tags_2,l as Tags_3,t as Tags_4,n as Tags_5,i as Tags_6,r as Tags_7,o as Tags_8,c as Tags_9,Ee as __namedExportsOrder,we as default};
