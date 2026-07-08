const ae={title:"Components/Chips",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> 
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
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Filter label using button 1
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
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
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon2" checked="">
    <label class="chip-interactive" for="filterWithIcon2">
      Another filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterIconOnly1">
    <label class="chip-interactive chip-icon" for="filterIconOnly1">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="disabledFilter" checked="" disabled="">
    <label class="chip-interactive" for="disabledFilter">
      Disabled checked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" disabled="" type="button">
      Disabled unchecked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <ul class="chips-container">
    <li class="chip chip-filter">
      <input type="checkbox" id="skeletonFilter" checked="">
      <label class="chip-interactive" for="skeletonFilter">
        Filter chip
      </label>
    </li>
    <li class="chip chip-filter">
      <button class="chip-interactive" type="button">
        Filter chip
      </button>
    </li>
  </ul>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      Looks good to me.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      Can we talk about it later ?
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 2
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      <span class="visually-hidden">I love it.</span>
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" type="button">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Go to parameters.</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="" type="button">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" disabled="" type="button">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Send "Go to parameters."</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <ul class="chips-container">
    <li class="chip chip-suggestion">
      <button class="chip-interactive" type="button">
        Thanks.
      </button>
    </li>
    <li class="chip chip-suggestion">
      <button class="chip-interactive" type="button">
        Suggestion chip
      </button>
    </li>
  </ul>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container flex-wrap" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container flex-wrap" style="max-height: 115px;" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var g,v,f;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> 
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
<\/script>\``,...(f=(v=e.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var m,y,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
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
<\/script>\``,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,Q,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Filter label using button 1
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Filter label using button 2
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(E=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:E.source}}};var C,S,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon">
    <label class="chip-interactive" for="filterWithIcon">
      Filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon2" checked="">
    <label class="chip-interactive" for="filterWithIcon2">
      Another filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var F,A,W;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterIconOnly1">
    <label class="chip-interactive chip-icon" for="filterIconOnly1">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
<\/script>\``,...(W=(A=s.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var D,_,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="disabledFilter" checked="" disabled="">
    <label class="chip-interactive" for="disabledFilter">
      Disabled checked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" disabled="" type="button">
      Disabled unchecked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var j,q,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <ul class="chips-container">
    <li class="chip chip-filter">
      <input type="checkbox" id="skeletonFilter" checked="">
      <label class="chip-interactive" for="skeletonFilter">
        Filter chip
      </label>
    </li>
    <li class="chip chip-filter">
      <button class="chip-interactive" type="button">
        Filter chip
      </button>
    </li>
  </ul>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(I=(q=a.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var O,T,G;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      Looks good to me.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      Can we talk about it later ?
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(G=(T=r.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var H,X,z;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 2
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(z=(X=c.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var B,J,K;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      <span class="visually-hidden">I love it.</span>
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" type="button">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Go to parameters.</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,N,P;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="" type="button">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" disabled="" type="button">
      <span class="icon si si-settings" aria-hidden="true"></span>
      <span class="visually-hidden">Send "Go to parameters."</span>
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var R,U,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <ul class="chips-container">
    <li class="chip chip-suggestion">
      <button class="chip-interactive" type="button">
        Thanks.
      </button>
    </li>
    <li class="chip chip-suggestion">
      <button class="chip-interactive" type="button">
        Suggestion chip
      </button>
    </li>
  </ul>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ie;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container flex-wrap" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(ie=(te=d.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ne,se,le;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <ul class="chips-container flex-wrap" style="max-height: 115px;" aria-label="Filter by">
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="true" type="button">
      Quite long label
    </button>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" type="button">
      Quite long label
    </button>
  </li>
</ul> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(le=(se=h.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const re=["Chips_0","Chips_1","Chips_2","Chips_3","Chips_4","Chips_5","Chips_6","Chips_7","Chips_8","Chips_9","Chips_10","Chips_11","Chips_12","Chips_13","Chips_14"];export{e as Chips_0,t as Chips_1,p as Chips_10,u as Chips_11,b as Chips_12,d as Chips_13,h as Chips_14,i as Chips_2,n as Chips_3,s as Chips_4,l as Chips_5,a as Chips_6,r as Chips_7,c as Chips_8,o as Chips_9,re as __namedExportsOrder,ae as default};
