const Z={title:"Components/Chips",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> 
<h4 id="filtersHeader">Filter by brands</h4>
<div role="group" aria-labelledby="filtersHeader">
  <ul class="chips-container">
    <li class="chip chip-filter">
      <input type="checkbox" id="appleCheck" checked="">
      <label class="chip-interactive" for="appleCheck">
        Apple
      </label>
    </li>
    <li class="chip chip-filter">
      <input type="checkbox" id="samsungCheck">
      <label class="chip-interactive" for="samsungCheck">
        Samsung
      </label>
    </li>
    <li class="chip chip-filter">
      <input type="checkbox" id="xiaomiCheck">
      <label class="chip-interactive" for="xiaomiCheck">
        Xiaomi
      </label>
    </li>
  </ul>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="radio" id="radioCheck" name="radio">
    <label class="chip-interactive" for="radioCheck">
      Filter with radio 1
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="radio" id="radioCheck2" name="radio">
    <label class="chip-interactive" for="radioCheck2">
      Filter with radio 2
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="radio" id="radioCheck3" name="radio" checked="">
    <label class="chip-interactive" for="radioCheck3">
      Filter with radio 3
    </label>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Filter label using button 1
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Filter label using button 2
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon">
    <label class="chip-interactive" for="filterWithIcon">
      Filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon2" checked="">
    <label class="chip-interactive" for="filterWithIcon2">
      Another filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterIconOnly1">
    <label class="chip-interactive chip-icon" for="filterIconOnly1">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      <span class="visually-hidden">Favorites</span>
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="checkbox" id="filterIconOnly2" checked="">
    <label class="chip-interactive chip-icon" for="filterIconOnly2">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Technical</span>
    </label>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="disabledFilter" checked="" disabled="">
    <label class="chip-interactive" for="disabledFilter">
      Disabled checked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" disabled="">
      Disabled unchecked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      Looks good to me.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      Can we talk about it later ?
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 2
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      <span class="visually-hidden">I love it.</span>
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Go to parameters.</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" disabled="">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Send "Go to parameters."</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container flex-wrap" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container flex-wrap" style="max-height: 115px;" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var h,d,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> 
<h4 id="filtersHeader">Filter by brands</h4>
<div role="group" aria-labelledby="filtersHeader">
  <ul class="chips-container">
    <li class="chip chip-filter">
      <input type="checkbox" id="appleCheck" checked="">
      <label class="chip-interactive" for="appleCheck">
        Apple
      </label>
    </li>
    <li class="chip chip-filter">
      <input type="checkbox" id="samsungCheck">
      <label class="chip-interactive" for="samsungCheck">
        Samsung
      </label>
    </li>
    <li class="chip chip-filter">
      <input type="checkbox" id="xiaomiCheck">
      <label class="chip-interactive" for="xiaomiCheck">
        Xiaomi
      </label>
    </li>
  </ul>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,f,m;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="radio" id="radioCheck" name="radio">
    <label class="chip-interactive" for="radioCheck">
      Filter with radio 1
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="radio" id="radioCheck2" name="radio">
    <label class="chip-interactive" for="radioCheck2">
      Filter with radio 2
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="radio" id="radioCheck3" name="radio" checked="">
    <label class="chip-interactive" for="radioCheck3">
      Filter with radio 3
    </label>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(m=(f=t.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var k,y,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Filter label using button 1
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Filter label using button 2
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var Q,w,C;n.parameters={...n.parameters,docs:{...(Q=n.parameters)==null?void 0:Q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon">
    <label class="chip-interactive" for="filterWithIcon">
      Filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon2" checked="">
    <label class="chip-interactive" for="filterWithIcon2">
      Another filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var E,S,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterIconOnly1">
    <label class="chip-interactive chip-icon" for="filterIconOnly1">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      <span class="visually-hidden">Favorites</span>
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="checkbox" id="filterIconOnly2" checked="">
    <label class="chip-interactive chip-icon" for="filterIconOnly2">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Technical</span>
    </label>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var F,W,D;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="disabledFilter" checked="" disabled="">
    <label class="chip-interactive" for="disabledFilter">
      Disabled checked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" disabled="">
      Disabled unchecked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(D=(W=s.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var _,L,j;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      Looks good to me.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      Can we talk about it later ?
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(j=(L=a.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var q,I,O;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 2
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var T,G,H;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      <span class="visually-hidden">I love it.</span>
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Go to parameters.</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(H=(G=r.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var X,z,B;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.0/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" disabled="">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Send "Go to parameters."</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(B=(z=o.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var J,K,M;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,P,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container flex-wrap" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,V,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container flex-wrap" style="max-height: 115px;" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive active" aria-pressed="true" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(Y=(V=b.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};const $=["Chips_0","Chips_1","Chips_2","Chips_3","Chips_4","Chips_5","Chips_6","Chips_7","Chips_8","Chips_9","Chips_10","Chips_11","Chips_12"];export{e as Chips_0,t as Chips_1,p as Chips_10,u as Chips_11,b as Chips_12,i as Chips_2,n as Chips_3,l as Chips_4,s as Chips_5,a as Chips_6,c as Chips_7,r as Chips_8,o as Chips_9,$ as __namedExportsOrder,Z as default};
