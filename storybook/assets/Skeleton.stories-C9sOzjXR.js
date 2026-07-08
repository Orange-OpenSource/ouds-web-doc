const B={title:"Components/Skeleton",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <div class="skeleton" style="width: 50%; height: 50px;" inert=""></div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="skeleton skeleton-title" inert=""></div>

<div class="skeleton-title" inert="">
  <div class="skeleton"></div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="skeleton skeleton-text" inert=""></div>
<div class="skeleton skeleton-text w-75" inert=""></div>

<div class="skeleton-text" inert="">
  <div class="skeleton"></div>
  <div class="skeleton"></div>
  <div class="skeleton col-9"></div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="skeleton w-50 ratio-1x1" inert=""></div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="skeleton-no-margins skeleton-text" inert="">
  <div class="skeleton mb-2xsmall"></div>
  <div class="skeleton mb-2xsmall"></div>
  <div class="skeleton w-50"></div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <div class="alert alert-message alert-negative mb-medium">
    <div class="alert-icon"></div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Label</p>
      </div>
    </div>
  </div>

  <ul class="bullet-list mb-medium">
    <li>Label</li>
    <li>Label</li>
  </ul>

  <button class="btn btn-default mb-medium">Label</button>

  <div class="checkbox-item mb-medium">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="checkboxDefault">Label</label>
    </div>
  </div>

  <label class="checkbox-standalone mb-medium">
    <input class="control-item-indicator" type="checkbox" value="">
    <span class="visually-hidden">Standalone checkbox</span>
  </label>

  <ul class="chips-container mb-medium">
    <li class="chip chip-filter">
      <input type="checkbox" id="filterCheck" checked="">
      <label class="chip-interactive" for="filterCheck">
        Label
      </label>
    </li>
  </ul>

  <div class="alert alert-info mb-medium">
    <div class="alert-icon"></div>
    <p class="alert-label">Label</p>
  </div>

  <button type="button" class="tag tag-input mb-medium">Input tag</button>

  <br>

  <a class="link mb-medium" href="#">Link</a>

  <div class="text-input mb-medium">
    <div class="text-input-container text-input-container-outlined">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#lock-closed"></use>
      </svg>
      <label for="inputPasswordPrefix">Password</label>
      <div class="input-container" data-bs-prefix="DEV-">
        <input type="password" id="inputPasswordPrefix" class="text-input-field" placeholder=" ">
      </div>
      <button class="btn btn-minimal btn-icon" aria-pressed="false" type="button">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
        </svg>
        <span class="visually-hidden">Show password</span>
      </button>
    </div>
  </div>

  <div class="radio-button-item mb-medium">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioDefault" name="radioBasic" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioDefault">Label</label>
    </div>
  </div>

  <label class="radio-button-standalone mb-medium">
    <input class="control-item-indicator" type="radio" value="">
    <span class="visually-hidden">Default standalone radio button</span>
  </label>

  <div class="select-input mb-medium">
    <div class="select-input-container select-input-container-outlined">
      <label for="exampleSelect">Select</label>
      <select class="select-input-field" id="exampleSelect">
        <option value="" disabled="" selected=""></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>

  <ul class="chips-container mb-medium">
    <li class="chip chip-suggestion">
      <button class="chip-interactive">
        Label
      </button>
    </li>
  </ul>

  <div class="switch-item mb-medium">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithSVG" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithSVG">Label</label>
    </div>
  </div>

  <label class="switch-standalone mb-medium">
    <input class="control-item-indicator" type="checkbox" role="switch" value="">
    <span class="visually-hidden">Standalone switch</span>
  </label>

  <br>

  <p class="tag mb-medium">Tag</p>

  <div class="text-area mb-medium">
    <div class="text-area-container text-area-container-outlined">
      <label for="exampleTextArea">Label</label>
      <textarea class="text-area-field" id="exampleTextArea" style="height: unset; min-height: unset"></textarea>
    </div>
  </div>

  <div class="text-input mb-medium">
    <div class="text-input-container text-input-container-outlined">
      <label for="exampleTextInputWithPlaceholder">Label</label>
      <input type="email" class="text-input-field" id="exampleTextInputWithPlaceholder" placeholder="placeholder">
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="bd-skeleton-replace">
  <div aria-busy="true" inert="">
    <div class="d-flex gap-medium mb-medium">
      <div class="skeleton w-50 ratio-1x1"></div>
      <div class="flex-grow-1 d-flex flex-column skeleton-text">
        <div class="skeleton skeleton-title mb-small"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton w-75"></div>
      </div>
    </div>
    <button class="btn btn-default">Relaunch animation</button>
  </div>
  <p class="visually-hidden" role="alert">Loading content ...</p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="bd-skeleton-replace2">
  <div aria-busy="true" inert="">
    <form class="d-flex flex-column gap-medium mb-medium" novalidate="">
      <div class="text-input">
        <div class="text-input-container">
          <label for="exampleTextInputWithPlaceholder2">Email address</label>
          <input type="email" class="text-input-field" id="exampleTextInputWithPlaceholder2" placeholder="name@example.com">
        </div>
      </div>
      <div class="select-input">
        <div class="select-input-container">
          <label for="exampleSelect2">Default select example</label>
          <select class="select-input-field" id="exampleSelect2">
            <option value="" disabled="" selected=""></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="checkbox-item">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault2">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="checkboxDefault2">Default checkbox</label>
        </div>
      </div>
    </form>
    <button class="btn btn-default" onclick="window.relaunchAnim2()">Relaunch animation</button>
  </div>
  <p class="visually-hidden" role="status">Loading form ...</p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var d,p,v;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <div class="skeleton" style="width: 50%; height: 50px;" inert=""></div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(v=(p=e.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var u,m,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,f,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="skeleton skeleton-title" inert=""></div>

<div class="skeleton-title" inert="">
  <div class="skeleton"></div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,g,y;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,w,L;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="skeleton skeleton-text" inert=""></div>
<div class="skeleton skeleton-text w-75" inert=""></div>

<div class="skeleton-text" inert="">
  <div class="skeleton"></div>
  <div class="skeleton"></div>
  <div class="skeleton col-9"></div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(L=(w=a.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var E,D,W;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="skeleton w-50 ratio-1x1" inert=""></div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(W=(D=s.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var A,_,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="skeleton-no-margins skeleton-text" inert="">
  <div class="skeleton mb-2xsmall"></div>
  <div class="skeleton mb-2xsmall"></div>
  <div class="skeleton w-50"></div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(T=(_=i.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var j,q,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div aria-busy="true" inert="">
  <div class="alert alert-message alert-negative mb-medium">
    <div class="alert-icon"></div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Label</p>
      </div>
    </div>
  </div>

  <ul class="bullet-list mb-medium">
    <li>Label</li>
    <li>Label</li>
  </ul>

  <button class="btn btn-default mb-medium">Label</button>

  <div class="checkbox-item mb-medium">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="checkboxDefault">Label</label>
    </div>
  </div>

  <label class="checkbox-standalone mb-medium">
    <input class="control-item-indicator" type="checkbox" value="">
    <span class="visually-hidden">Standalone checkbox</span>
  </label>

  <ul class="chips-container mb-medium">
    <li class="chip chip-filter">
      <input type="checkbox" id="filterCheck" checked="">
      <label class="chip-interactive" for="filterCheck">
        Label
      </label>
    </li>
  </ul>

  <div class="alert alert-info mb-medium">
    <div class="alert-icon"></div>
    <p class="alert-label">Label</p>
  </div>

  <button type="button" class="tag tag-input mb-medium">Input tag</button>

  <br>

  <a class="link mb-medium" href="#">Link</a>

  <div class="text-input mb-medium">
    <div class="text-input-container text-input-container-outlined">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#lock-closed"></use>
      </svg>
      <label for="inputPasswordPrefix">Password</label>
      <div class="input-container" data-bs-prefix="DEV-">
        <input type="password" id="inputPasswordPrefix" class="text-input-field" placeholder=" ">
      </div>
      <button class="btn btn-minimal btn-icon" aria-pressed="false" type="button">
        <svg aria-hidden="true">
          <use xlink:href="/orange/docs/1.4/assets/img/ouds-web-sprite.svg#accessibility-vision"></use>
        </svg>
        <span class="visually-hidden">Show password</span>
      </button>
    </div>
  </div>

  <div class="radio-button-item mb-medium">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="radio" value="" id="radioDefault" name="radioBasic" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="radioDefault">Label</label>
    </div>
  </div>

  <label class="radio-button-standalone mb-medium">
    <input class="control-item-indicator" type="radio" value="">
    <span class="visually-hidden">Default standalone radio button</span>
  </label>

  <div class="select-input mb-medium">
    <div class="select-input-container select-input-container-outlined">
      <label for="exampleSelect">Select</label>
      <select class="select-input-field" id="exampleSelect">
        <option value="" disabled="" selected=""></option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>

  <ul class="chips-container mb-medium">
    <li class="chip chip-suggestion">
      <button class="chip-interactive">
        Label
      </button>
    </li>
  </ul>

  <div class="switch-item mb-medium">
    <div class="control-item-assets-container">
      <input class="control-item-indicator" type="checkbox" role="switch" value="" id="switchWithSVG" checked="">
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="switchWithSVG">Label</label>
    </div>
  </div>

  <label class="switch-standalone mb-medium">
    <input class="control-item-indicator" type="checkbox" role="switch" value="">
    <span class="visually-hidden">Standalone switch</span>
  </label>

  <br>

  <p class="tag mb-medium">Tag</p>

  <div class="text-area mb-medium">
    <div class="text-area-container text-area-container-outlined">
      <label for="exampleTextArea">Label</label>
      <textarea class="text-area-field" id="exampleTextArea" style="height: unset; min-height: unset"></textarea>
    </div>
  </div>

  <div class="text-input mb-medium">
    <div class="text-input-container text-input-container-outlined">
      <label for="exampleTextInputWithPlaceholder">Label</label>
      <input type="email" class="text-input-field" id="exampleTextInputWithPlaceholder" placeholder="placeholder">
    </div>
  </div>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(P=(q=o.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var I,V,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="bd-skeleton-replace">
  <div aria-busy="true" inert="">
    <div class="d-flex gap-medium mb-medium">
      <div class="skeleton w-50 ratio-1x1"></div>
      <div class="flex-grow-1 d-flex flex-column skeleton-text">
        <div class="skeleton skeleton-title mb-small"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton"></div>
        <div class="skeleton w-75"></div>
      </div>
    </div>
    <button class="btn btn-default">Relaunch animation</button>
  </div>
  <p class="visually-hidden" role="alert">Loading content ...</p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(C=(V=c.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var O,G,R;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="bd-skeleton-replace2">
  <div aria-busy="true" inert="">
    <form class="d-flex flex-column gap-medium mb-medium" novalidate="">
      <div class="text-input">
        <div class="text-input-container">
          <label for="exampleTextInputWithPlaceholder2">Email address</label>
          <input type="email" class="text-input-field" id="exampleTextInputWithPlaceholder2" placeholder="name@example.com">
        </div>
      </div>
      <div class="select-input">
        <div class="select-input-container">
          <label for="exampleSelect2">Default select example</label>
          <select class="select-input-field" id="exampleSelect2">
            <option value="" disabled="" selected=""></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="checkbox-item">
        <div class="control-item-assets-container">
          <input class="control-item-indicator" type="checkbox" value="" id="checkboxDefault2">
        </div>
        <div class="control-item-text-container">
          <label class="control-item-label" for="checkboxDefault2">Default checkbox</label>
        </div>
      </div>
    </form>
    <button class="btn btn-default" onclick="window.relaunchAnim2()">Relaunch animation</button>
  </div>
  <p class="visually-hidden" role="status">Loading form ...</p>
</div> </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(R=(G=r.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const z=["Skeleton_0","Skeleton_1","Skeleton_2","Skeleton_3","Skeleton_4","Skeleton_5","Skeleton_6","Skeleton_7","Skeleton_8","Skeleton_9"];export{e as Skeleton_0,t as Skeleton_1,n as Skeleton_2,l as Skeleton_3,a as Skeleton_4,s as Skeleton_5,i as Skeleton_6,o as Skeleton_7,c as Skeleton_8,r as Skeleton_9,z as __namedExportsOrder,B as default};
