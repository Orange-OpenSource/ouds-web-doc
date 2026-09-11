var e=[`angular-cli`,`create-react-app`,`html`,`javascript`,`node`,`polymer`,`typescript`,`vue`],t=[`project`,`search`,`ports`,`settings`],n=[`light`,`dark`],r=[`editor`,`preview`],i=`accelerometer.ambient-light-sensor.autoplay.battery.bluetooth.camera.clipboard-read.clipboard-write.display-capture.encrypted-media.fullscreen.gamepad.geolocation.gyroscope.hid.idle-detection.local-network.local-network-access.loopback-network.magnetometer.microphone.midi.payment.picture-in-picture.publickey-credentials-get.screen-wake-lock.serial.usb.web-share.xr-spatial-tracking`.split(`.`),a={clickToLoad:e=>s(`ctl`,e),devToolsHeight:e=>l(`devtoolsheight`,e),forceEmbedLayout:e=>s(`embed`,e),hideDevTools:e=>s(`hidedevtools`,e),hideExplorer:e=>s(`hideExplorer`,e),hideNavigation:e=>s(`hideNavigation`,e),openFile:e=>d(`file`,e),showSidebar:e=>c(`showSidebar`,e),sidebarView:e=>u(`sidebarView`,e,t),startScript:e=>d(`startScript`,e),terminalHeight:e=>l(`terminalHeight`,e),theme:e=>u(`theme`,e,n),view:e=>u(`view`,e,r),zenMode:e=>s(`zenMode`,e),organization:e=>`${d(`orgName`,e?.name)}&${d(`orgProvider`,e?.provider)}`,crossOriginIsolated:e=>s(`corp`,e)};function o(e={}){let t=Object.entries(e).map(([e,t])=>t!=null&&a.hasOwnProperty(e)?a[e](t):``).filter(Boolean);return t.length?`?${t.join(`&`)}`:``}function s(e,t){return t===!0?`${e}=1`:``}function c(e,t){return typeof t==`boolean`?`${e}=${t?`1`:`0`}`:``}function l(e,t){return typeof t==`number`&&!Number.isNaN(t)?`${e}=${encodeURIComponent(Math.round(Math.min(100,Math.max(0,t))))}`:``}function u(e,t=``,n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:``}function d(e,t){return(Array.isArray(t)?t:[t]).filter(e=>typeof e==`string`&&e.trim()!==``).map(t=>`${e}=${encodeURIComponent(t)}`).join(`&`)}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function p(e,t){return`${h(t)}${e}${o(t)}`}function m(e,t){let n={forceEmbedLayout:!0};return t&&typeof t==`object`&&Object.assign(n,t),`${h(n)}${e}${o(n)}`}function h(e={}){return(typeof e.origin==`string`?e.origin:`https://stackblitz.com`).replace(/\/$/,``)}function g(e,t,n){if(!t||!e||!e.parentNode)throw Error(`Invalid Element`);e.id&&(t.id=e.id),e.className&&(t.className=e.className),y(t,n),b(e,t,n),e.replaceWith(t)}function _(e){if(typeof e==`string`){let t=document.getElementById(e);if(!t)throw Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw Error(`Invalid element: ${e}`)}function v(e){return e&&e.newWindow===!1?`_self`:`_blank`}function y(e,t={}){let n=Object.hasOwnProperty.call(t,`height`)?`${t.height}`:`300`,r=Object.hasOwnProperty.call(t,`width`)?`${t.width}`:void 0;e.setAttribute(`height`,n),r?e.setAttribute(`width`,r):e.setAttribute(`style`,`width:100%;`)}function b(e,t,n={}){let r=e.allow?.split(`;`)?.map(e=>e.trim()).filter(Boolean)??[],i=new Set(r.map(e=>e.split(/\s+/)[0]));for(let e of x())i.has(e)||(r.push(`${e} *`),i.add(e));n.crossOriginIsolated&&!i.has(`cross-origin-isolated`)&&(r.push(`cross-origin-isolated ${h(n)}`),i.add(`cross-origin-isolated`)),r.length>0&&(t.allow=r.join(`; `))}function x(){let e=new Set(i);try{let t=document?.featurePolicy;if(t&&typeof t.allowedFeatures==`function`)for(let n of t.allowedFeatures())e.add(n)}catch{}return e.delete(`cross-origin-isolated`),[...e]}var S=class{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise((n,r)=>{let i=f();this.pending[i]={resolve:n,reject:r},this.port.postMessage({type:e,payload:{...t,__reqid:i}})})}messageListener(e){if(typeof e.data.payload?.__reqid!=`string`)return;let{type:t,payload:n}=e.data,{__reqid:r,__success:i,__error:a}=n;this.pending[r]&&(i?this.pending[r].resolve(this.cleanResult(n)):this.pending[r].reject(a?`${t}: ${a}`:t),delete this.pending[r])}cleanResult(e){let t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}},C=class{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:`SDK_OPEN_FILE`,payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:`SDK_SET_CURRENT_FILE`,payload:{path:e}}),setTheme:e=>this._rdc.request({type:`SDK_SET_UI_THEME`,payload:{theme:e}}),setView:e=>this._rdc.request({type:`SDK_SET_UI_VIEW`,payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:`SDK_TOGGLE_SIDEBAR`,payload:{visible:e}})},this.preview={origin:``,getUrl:()=>this._rdc.request({type:`SDK_GET_PREVIEW_URL`,payload:{}}).then(e=>e?.url??null),setUrl:(e=`/`)=>{if(typeof e!=`string`||!e.startsWith(`/`))throw Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:`SDK_SET_PREVIEW_URL`,payload:{path:e}})}},this._rdc=new S(e),Object.defineProperty(this.preview,"origin",{value:typeof t.previewOrigin==`string`?t.previewOrigin:null,writable:!1})}applyFsDiff(e){let t=e=>typeof e==`object`&&!!e;if(!t(e)||!t(e.create))throw Error(`Invalid diff object: expected diff.create to be an object.`);if(!Array.isArray(e.destroy))throw Error(`Invalid diff object: expected diff.destroy to be an array.`);return this._rdc.request({type:`SDK_APPLY_FS_DIFF`,payload:e})}getDependencies(){return this._rdc.request({type:`SDK_GET_DEPS_SNAPSHOT`,payload:{}})}getFsSnapshot(){return this._rdc.request({type:`SDK_GET_FS_SNAPSHOT`,payload:{}})}},w=[],T=class{constructor(e){this.id=f(),this.element=e,this.pending=new Promise((e,t)=>{let n=({data:t,ports:n})=>{t?.action===`SDK_INIT_SUCCESS`&&t.id===this.id&&(this.vm=new C(n[0],t.payload),e(this.vm),i())},r=()=>{this.element.contentWindow?.postMessage({action:`SDK_INIT`,id:this.id},`*`)};function i(){window.clearInterval(o),window.removeEventListener(`message`,n)}window.addEventListener(`message`,n),r();let a=0,o=window.setInterval(()=>{if(this.vm){i();return}if(a>=20){i(),t(`Timeout: Unable to establish a connection with the StackBlitz VM`),w.forEach((e,t)=>{e.id===this.id&&w.splice(t,1)});return}a++,r()},500)}),w.push(this)}},E=e=>{let t=e instanceof Element?`element`:`id`;return w.find(n=>n[t]===e)??null};function D(e,t){let n=document.createElement(`input`);return n.type=`hidden`,n.name=e,n.value=t,n}function O(e){return e.replace(/\[/g,`%5B`).replace(/\]/g,`%5D`)}function k({template:t,title:n,description:r,dependencies:i,files:a,settings:o}){if(!e.includes(t)){let t=e.map(e=>`'${e}'`).join(`, `);console.warn(`Unsupported project.template: must be one of ${t}`)}let s=[],c=(e,t,n=``)=>{s.push(D(e,typeof t==`string`?t:n))};c(`project[title]`,n),typeof r==`string`&&r.length>0&&c(`project[description]`,r),c(`project[template]`,t,`javascript`),i&&(t===`node`?console.warn(`Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template.`):c(`project[dependencies]`,JSON.stringify(i))),o&&c(`project[settings]`,JSON.stringify(o)),Object.entries(a).forEach(([e,t])=>{c(`project[files][${O(e)}]`,t)});let l=document.createElement(`form`);return l.method=`POST`,l.setAttribute(`style`,`display:none!important;`),l.append(...s),l}function A(e,t){let n=k(e);return n.action=m(`/run`,t),n.id=`sb_run`,`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function j(e,t){let n=k(e);n.action=p(`/run`,t),n.target=v(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function M(e){return e?.contentWindow?(E(e)??new T(e)).pending:Promise.reject(`Provided element is not an iframe.`)}function N(e,t){j(e,t)}function P(e,t){let n=p(`/edit/${e}`,t),r=v(t);window.open(n,r)}function F(e,t){let n=p(`/github/${e}`,t),r=v(t);window.open(n,r)}function I(e,t,n){let r=_(e),i=A(t,n),a=document.createElement(`iframe`);return g(r,a,n),a.contentDocument?.write(i),M(a)}function L(e,t,n){let r=_(e),i=document.createElement(`iframe`);return i.src=m(`/edit/${t}`,n),g(r,i,n),M(i)}function R(e,t,n){let r=_(e),i=document.createElement(`iframe`);return i.src=m(`/github/${t}`,n),g(r,i,n),M(i)}var z={connect:M,embedGithubProject:R,embedProject:I,embedProjectId:L,openGithubProject:F,openProject:N,openProjectId:P},B=`// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2026 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global oudsWeb: false */

export default () => {
  // OUDS mod: Try not using \`const\` at the first layer in this file, otherwise Storybook will fail to render some examples.

  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new oudsWeb.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new oudsWeb.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview

  // -------------------------------
  // Toasts
  // -------------------------------
  // Used by 'Placement' example in docs or StackBlitz
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new oudsWeb.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      oudsWeb.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts

  // -------------------------------
  // Alerts
  // -------------------------------
  // Used in 'Show live alert' example in docs or StackBlitz

  // OUDS mod: adapted innerHTML to have the icon and so added a parameter within \`appendAlert()\` and a tooltip on \`.btn-close\`
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \`<div class="alert alert-message alert-\${type}" \${type === 'negative' ? 'role="alert"' : ''}>\`,
      '  <div class="alert-icon">',
      \`    <p class="visually-hidden">\${typeVisuallyHidden} alert</p>\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \`      <h5 class="alert-label">\${message}</h5>\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \`        <span class="visually-hidden">Close \${type} alert</span>\`,
      '      </button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper.firstChild)
  }

  if (document.getElementById('liveAlertBtn')) {
    const functionalArray = ['positive', 'negative', 'info', 'warning']
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      const type = functionalArray[Math.floor(Math.random() * functionalArray.length)]
      appendAlert(\`Nice, you triggered this \${type} alert message!\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts

  // --------
  // Carousels
  // --------
  // Instantiate all non-autoplaying carousels in docs or StackBlitz
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      oudsWeb.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel

  // -------------------------------
  // Checks & Radios
  // -------------------------------
  // Indeterminate checkbox example in docs and StackBlitz
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios

  // -------------------------------
  // Links
  // -------------------------------
  // Disable empty links in docs examples only
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  // -------------------------------
  // Modal
  // -------------------------------
  // Modal 'Varying modal content' example in docs and StackBlitz
  // storybook-start modal
  // js-docs-start varying-modal-content
  if (document.getElementById('exampleModal')) {
    document.getElementById('exampleModal').addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = document.getElementById('exampleModal').querySelector('.modal-title')
      const modalBodyInput = document.getElementById('exampleModal').querySelector('.modal-body input')

      modalTitle.textContent = \`New message to \${recipient}\`
      modalBodyInput.value = recipient
    })
  }
  // js-docs-end varying-modal-content
  // storybook-end modal

  // -------------------------------
  // Offcanvas
  // -------------------------------
  // 'Offcanvas components' example in docs only
  // storybook-start offcanvas
  document.querySelectorAll('.bd-example-offcanvas .offcanvas')
    .forEach(offcanvas => {
      offcanvas.addEventListener('show.bs.offcanvas', event => {
        event.preventDefault()
      }, false)
    })
  // storybook-end offcanvas

  // -------------------------------
  // Skeletons
  // -------------------------------
  // First example
  if (document.querySelector('.bd-skeleton-replace')) {
  // js-docs-start skeleton-first-example
    const skeletonToReplace = document.querySelector('.bd-skeleton-replace')
    const originalContent = skeletonToReplace.innerHTML

    // eslint-disable-next-line no-inner-declarations
    function replaceSkeleton() {
      setTimeout(() => {
        skeletonToReplace.innerHTML = \`<div class="d-flex gap-medium mb-medium">
          <img class="flex-shrink-0 w-50 ratio-1x1 object-fit-cover" src="https://placecats.com/500/500" alt="" />
          <div class="flex-grow-1 d-flex flex-column">
            <h4 class="h1">Placeholder title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi.</p>
          </div>
        </div>
        <button class="btn btn-default" onclick="window.relaunchAnim()">Relaunch animation</button>
        <p class="visually-hidden" role="alert">Content loaded.</p>\`
      }, 8000)
    }

    document.addEventListener('DOMContentLoaded', () => {
      replaceSkeleton()
    })

    window.relaunchAnim = () => {
      skeletonToReplace.innerHTML = originalContent
      replaceSkeleton()
    }
    // js-docs-end skeleton-first-example

    // Second example
    // js-docs-start skeleton-second-example
    const skeletonToReplace2 = document.querySelector('.bd-skeleton-replace2')

    // eslint-disable-next-line no-inner-declarations
    function removeSkeletons() {
      setTimeout(() => {
        skeletonToReplace2.firstElementChild.removeAttribute('inert')
        skeletonToReplace2.firstElementChild.setAttribute('aria-busy', 'false')
        skeletonToReplace2.lastElementChild.textContent = 'Form loaded.'
      }, 8000)
    }

    document.addEventListener('DOMContentLoaded', () => {
      removeSkeletons()
    })

    window.relaunchAnim2 = () => {
      skeletonToReplace2.firstElementChild.setAttribute('inert', '')
      skeletonToReplace2.firstElementChild.setAttribute('aria-busy', 'true')
      skeletonToReplace2.lastElementChild.textContent = 'Loading form ...'
      removeSkeletons()
    }
    // js-docs-end skeleton-second-example
  }

  // -------------------------------
  // Show password live example
  // -------------------------------
  // Used by 'password input' live example in docs or StackBlitz
  // storybook-start password-input
  // js-docs-start live-show-password
  // Toggle password visibility
  const togglePasswordButton = document.querySelector('#liveShowPasswordExample #togglePassword')
  if (togglePasswordButton) {
    const passwordInput = document.querySelector('#liveShowPasswordExample #liveInputPassword')
    const iconUse = togglePasswordButton.querySelector('use')
    const buttonLabel = togglePasswordButton.querySelector('.visually-hidden')

    togglePasswordButton.addEventListener('click', event => {
      event.preventDefault()

      // Toggle the type attribute to make the password visible or hidden
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
      passwordInput.setAttribute('type', type)

      // Toggle the aria-pressed attribute, the button's label and the icon to reflect the change in state
      if (type === 'text') {
        togglePasswordButton.setAttribute('aria-pressed', 'true')
        buttonLabel.textContent = 'Hide password'
        iconUse.setAttribute('xlink:href', iconUse.getAttribute('xlink:href').replace('accessibility-vision', 'hide'))
      } else {
        togglePasswordButton.setAttribute('aria-pressed', 'false')
        buttonLabel.textContent = 'Show password'
        iconUse.setAttribute('xlink:href', iconUse.getAttribute('xlink:href').replace('hide', 'accessibility-vision'))
      }
    })
  }
  // js-docs-end live-show-password
  // storybook-end password-input

  // -------------------------------
  // Table
  // -------------------------------
  // Indeterminate checkbox in table example in docs and StackBlitz
  // storybook-start table
  // js-docs-start live-row-selection-checkboxes
  // Manage checkboxes states: select/deselect all rows, update header checkbox state, update data-bs-theme on selected rows
  const tableSelectAll = document.querySelector('#tableWithCheckboxes #tableSelectAll')
  const allCheckboxes = document.querySelectorAll('#tableWithCheckboxes tbody input[type="checkbox"]')

  function updateSelectAllState() {
    const checkedCheckboxes = document.querySelectorAll('#tableWithCheckboxes tbody input[type="checkbox"]:checked')

    if (checkedCheckboxes.length === 0) {
      // None are checked
      tableSelectAll.checked = false
      tableSelectAll.indeterminate = false
    } else if (checkedCheckboxes.length === allCheckboxes.length) {
      // All are checked
      tableSelectAll.checked = true
      tableSelectAll.indeterminate = false
    } else {
      // Some are checked
      tableSelectAll.checked = false
      tableSelectAll.indeterminate = true
    }
  }

  function updateSelectedRows() {
    const selectedRows = document.querySelectorAll('#tableWithCheckboxes tbody tr:has(input[type="checkbox"]:checked)')

    if (selectedRows.length >= 1) {
      selectedRows.forEach(row => row.setAttribute('data-bs-theme', 'dark'))
    }

    const unselectedRows = document.querySelectorAll('#tableWithCheckboxes tbody tr:has(input[type="checkbox"]:not(:checked))')
    if (unselectedRows.length >= 1) {
      unselectedRows.forEach(row => row.removeAttribute('data-bs-theme'))
    }

    updateSelectAllState()
  }

  if (tableSelectAll) {
    tableSelectAll.addEventListener('change', event => {
      allCheckboxes.forEach(checkbox => {
        checkbox.checked = event.target.checked
      })
      updateSelectedRows()
    })

    // Add change listener to all row checkboxes
    allCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateSelectedRows)
    })

    // Initialize the state on load
    updateSelectAllState()
  }
  // js-docs-end live-row-selection-checkboxes

  // js-docs-start live-row-selection-radios
  // Manage radio buttons states: update data-bs-theme on selected row
  const allRadios = document.querySelectorAll('#tableWithRadios tbody input[type="radio"]')
  // Add change listener to all row radios
  allRadios.forEach(radio => {
    radio.addEventListener('change', event => {
      const selectedRow = event.target.closest('tr')
      const allRows = document.querySelectorAll('#tableWithRadios tbody tr')

      // Remove data-bs-theme from all rows
      allRows.forEach(row => row.removeAttribute('data-bs-theme'))

      // Add data-bs-theme="dark" to the selected row
      if (selectedRow) {
        selectedRow.setAttribute('data-bs-theme', 'dark')
      }
    })
  })
  // js-docs-end live-row-selection-radios
  // storybook-end table
}
`,V={cssCdn:`https://cdn.jsdelivr.net/npm/@ouds/web-orange@1.5.0/dist/css/ouds-web.min.css`,cssBootstrapCdn:`https://cdn.jsdelivr.net/npm/@ouds/web-orange@1.5.0/dist/css/ouds-web-bootstrap.min.css`,jsBundleCdn:`https://cdn.jsdelivr.net/npm/@ouds/web-common@1.5.0/dist/js/ouds-web.bundle.min.js`,docsVersion:`1.5`};document.querySelectorAll(`.btn-edit`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.closest(`.bd-code-snippet`),n=t.querySelector(`.bd-example`),r=n.innerHTML,i=t.querySelector(`.btn-edit`).getAttribute(`data-sb-js-snippet`),a=t.closest(`[data-sb-css-bootstrap]`);H(r,i,Array.from(n.classList).join(` `),a)})});var H=(e,t,n,r)=>{let i=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="${r?V.cssBootstrapCdn:V.cssCdn}" rel="stylesheet" />
    <link href="https://web.unified-design-system.orange.com/docs/${V.docsVersion}/assets/css/docs.css" rel="stylesheet" />
    <title>OUDS Web Example</title>
    <script defer src="${V.jsBundleCdn}"><\/script>
  </head>
  <body class="p-2xlarge m-none border-none ${n}">
    <!-- Example Code -->
  ${e.trimStart().replace(/^/gm,`    `).replace(/^ {4}$/gm,``).trimEnd()}
    <!-- End Example Code -->
  </body>
</html>`,a=``;t&&(a=B.replace(`export default () => {`,`const snippets_default = () => {`),a=`(() => {
  ${a}
  // <stdin>
  snippets_default();
})();`);let o={files:{"index.html":i,...t&&{"index.js":a}},title:`OUDS Web Example`,description:`Official example from ${window.location.href}`,template:t?`javascript`:`html`,tags:[`ouds-web`]};z.openProject(o,{openFile:`index.html`})};