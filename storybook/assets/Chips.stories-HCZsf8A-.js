import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{t={title:`Components/Chips`,parameters:{docs:{toc:!0}}},n=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        
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
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon">
    <label class="chip-interactive" for="filterWithIcon">
      Filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon2" checked="">
    <label class="chip-interactive" for="filterWithIcon2">
      Another filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterIconOnly1">
    <label class="chip-interactive chip-icon" for="filterIconOnly1">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="disabledFilter" checked="" disabled="">
    <label class="chip-interactive" for="disabledFilter">
      Disabled checked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" disabled="" type="button">
      Disabled unchecked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </button>
  </li>
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <div aria-busy="true" inert="">
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
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Answer with">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 2
    </button>
  </li>
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,f=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="" type="button">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <div aria-busy="true" inert="">
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
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container flex-wrap" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,g=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container flex-wrap" style="max-height: 115px;" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,_=()=>`<div class="bd-example order-first m-none border-none d-flex flex-wrap gap-medium m-none border-none">
        <div class="chip chip-filter">
  <input type="checkbox" id="wrappingChip" checked="">
  <label class="chip-interactive" for="wrappingChip">
    Filter chip<br>
    with a very long label
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </label>
</div>
<div class="chip chip-suggestion">
  <button class="chip-interactive" type="button">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Suggestion chip<br>
    with a very long label
  </button>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,v=[`Chips_0`,`Chips_1`,`Chips_2`,`Chips_3`,`Chips_4`,`Chips_5`,`Chips_6`,`Chips_7`,`Chips_8`,`Chips_9`,`Chips_10`,`Chips_11`,`Chips_12`,`Chips_13`,`Chips_14`,`Chips_15`],n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        
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
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon">
    <label class="chip-interactive" for="filterWithIcon">
      Filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <input type="checkbox" id="filterWithIcon2" checked="">
    <label class="chip-interactive" for="filterWithIcon2">
      Another filter with icon
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="filterIconOnly1">
    <label class="chip-interactive chip-icon" for="filterIconOnly1">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
  <li class="chip chip-filter">
    <input type="checkbox" id="disabledFilter" checked="" disabled="">
    <label class="chip-interactive" for="disabledFilter">
      Disabled checked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </label>
  </li>
  <li class="chip chip-filter">
    <button class="chip-interactive" data-bs-toggle="button" aria-pressed="false" disabled="" type="button">
      Disabled unchecked filter
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
    </button>
  </li>
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <div aria-busy="true" inert="">
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
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Answer with">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 1
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      Suggestion with icon 2
    </button>
  </li>
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive chip-icon" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Answer with">
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="" type="button">
      Thanks.
    </button>
  </li>
  <li class="chip chip-suggestion">
    <button class="chip-interactive" disabled="" type="button">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <div aria-busy="true" inert="">
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
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container flex-wrap" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <ul class="chips-container flex-wrap" style="max-height: 115px;" aria-label="Filter by">
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
</ul>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-wrap gap-medium m-none border-none">
        <div class="chip chip-filter">
  <input type="checkbox" id="wrappingChip" checked="">
  <label class="chip-interactive" for="wrappingChip">
    Filter chip<br>
    with a very long label
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </label>
</div>
<div class="chip chip-suggestion">
  <button class="chip-interactive" type="button">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    Suggestion chip<br>
    with a very long label
  </button>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,..._.parameters?.docs?.source}}}})))()}y();export{n as Chips_0,r as Chips_1,f as Chips_10,p as Chips_11,m as Chips_12,h as Chips_13,g as Chips_14,_ as Chips_15,i as Chips_2,a as Chips_3,o as Chips_4,s as Chips_5,c as Chips_6,l as Chips_7,u as Chips_8,d as Chips_9,v as __namedExportsOrder,t as default};