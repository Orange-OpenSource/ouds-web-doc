const j="https://stackblitz.com",E=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],P=["project","search","ports","settings"],B=["light","dark"],$=["editor","preview"],S={clickToLoad:e=>d("ctl",e),devToolsHeight:e=>x("devtoolsheight",e),forceEmbedLayout:e=>d("embed",e),hideDevTools:e=>d("hidedevtools",e),hideExplorer:e=>d("hideExplorer",e),hideNavigation:e=>d("hideNavigation",e),openFile:e=>p("file",e),showSidebar:e=>L("showSidebar",e),sidebarView:e=>f("sidebarView",e,P),startScript:e=>p("startScript",e),terminalHeight:e=>x("terminalHeight",e),theme:e=>f("theme",e,B),view:e=>f("view",e,$),zenMode:e=>d("zenMode",e),organization:e=>`${p("orgName",e?.name)}&${p("orgProvider",e?.provider)}`,crossOriginIsolated:e=>d("corp",e)};function A(e={}){const t=Object.entries(e).map(([n,o])=>o!=null&&S.hasOwnProperty(n)?S[n](o):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function d(e,t){return t===!0?`${e}=1`:""}function L(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function x(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function f(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function p(e,t){return(Array.isArray(t)?t:[t]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${e}=${encodeURIComponent(o)}`).join("&")}function T(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function y(e,t){return`${I(t)}${e}${A(t)}`}function g(e,t){const n={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(n,t),`${I(n)}${e}${A(n)}`}function I(e={}){return(typeof e.origin=="string"?e.origin:j).replace(/\/$/,"")}function w(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),R(t,n),q(e,t,n),e.replaceWith(t)}function v(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function k(e){return e&&e.newWindow===!1?"_self":"_blank"}function R(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}function q(e,t,n={}){const o=e.allow?.split(";")?.map(s=>s.trim())??[];n.crossOriginIsolated&&!o.includes("cross-origin-isolated")&&o.push("cross-origin-isolated"),o.length>0&&(t.allow=o.join("; "))}class M{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:n}){return new Promise((o,s)=>{const r=T();this.pending[r]={resolve:o,reject:s},this.port.postMessage({type:t,payload:{...n,__reqid:r}})})}messageListener(t){if(typeof t.data.payload?.__reqid!="string")return;const{type:n,payload:o}=t.data,{__reqid:s,__success:r,__error:a}=o;this.pending[s]&&(r?this.pending[s].resolve(this.cleanResult(o)):this.pending[s].reject(a?`${n}: ${a}`:n),delete this.pending[s])}cleanResult(t){const n={...t};return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}}class D{constructor(t,n){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>o?.url??null),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new M(t),Object.defineProperty(this.preview,"origin",{value:typeof n.previewOrigin=="string"?n.previewOrigin:null,writable:!1})}applyFsDiff(t){const n=o=>o!==null&&typeof o=="object";if(!n(t)||!n(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const h=[];class N{constructor(t){this.id=T(),this.element=t,this.pending=new Promise((n,o)=>{const s=({data:l,ports:c})=>{l?.action==="SDK_INIT_SUCCESS"&&l.id===this.id&&(this.vm=new D(c[0],l.payload),n(this.vm),a())},r=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function a(){window.clearInterval(u),window.removeEventListener("message",s)}window.addEventListener("message",s),r();let i=0;const u=window.setInterval(()=>{if(this.vm){a();return}if(i>=20){a(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),h.forEach((l,c)=>{l.id===this.id&&h.splice(c,1)});return}i++,r()},500)}),h.push(this)}}const O=e=>{const t=e instanceof Element?"element":"id";return h.find(n=>n[t]===e)??null};function U(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function F(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function _({template:e,title:t,description:n,dependencies:o,files:s,settings:r}){if(!E.includes(e)){const l=E.map(c=>`'${c}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${l}`)}const a=[],i=(l,c,C="")=>{a.push(U(l,typeof c=="string"?c:C))};i("project[title]",t),typeof n=="string"&&n.length>0&&i("project[description]",n),i("project[template]",e,"javascript"),o&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):i("project[dependencies]",JSON.stringify(o))),r&&i("project[settings]",JSON.stringify(r)),Object.entries(s).forEach(([l,c])=>{i(`project[files][${F(l)}]`,c)});const u=document.createElement("form");return u.method="POST",u.setAttribute("style","display:none!important;"),u.append(...a),u}function W(e,t){const n=_(e);return n.action=g("/run",t),n.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function H(e,t){const n=_(e);n.action=y("/run",t),n.target=k(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function b(e){return e?.contentWindow?(O(e)??new N(e)).pending:Promise.reject("Provided element is not an iframe.")}function z(e,t){H(e,t)}function V(e,t){const n=y(`/edit/${e}`,t),o=k(t);window.open(n,o)}function K(e,t){const n=y(`/github/${e}`,t),o=k(t);window.open(n,o)}function G(e,t,n){const o=v(e),s=W(t,n),r=document.createElement("iframe");return w(o,r,n),r.contentDocument?.write(s),b(r)}function J(e,t,n){const o=v(e),s=document.createElement("iframe");return s.src=g(`/edit/${t}`,n),w(o,s,n),b(s)}function X(e,t,n){const o=v(e),s=document.createElement("iframe");return s.src=g(`/github/${t}`,n),w(o,s,n),b(s)}const Y={connect:b,embedGithubProject:X,embedProject:G,embedProjectId:J,openGithubProject:K,openProject:z,openProjectId:V},Q=`// NOTICE!!! Initially embedded in our docs this JavaScript
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
`,m={cssCdn:"https://cdn.jsdelivr.net/npm/@ouds/web-orange-compact@1.3.0/dist/css/ouds-web.min.css",cssBootstrapCdn:"https://cdn.jsdelivr.net/npm/@ouds/web-orange-compact@1.3.0/dist/css/ouds-web-bootstrap.min.css",jsBundleCdn:"https://cdn.jsdelivr.net/npm/@ouds/web-common@1.3.0/dist/js/ouds-web.bundle.min.js",docsVersion:"1.3"};document.querySelectorAll(".btn-edit").forEach(e=>{e.addEventListener("click",t=>{const n=t.target.closest(".bd-code-snippet"),o=n.querySelector(".bd-example"),s=o.innerHTML,r=n.querySelector(".btn-edit").getAttribute("data-sb-js-snippet"),a=n.closest("[data-sb-css-bootstrap]"),i=Array.from(o.classList).join(" ");Z(s,r,i,a)})});const Z=(e,t,n,o)=>{const s=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="${o?m.cssBootstrapCdn:m.cssCdn}" rel="stylesheet" />
    <link href="https://web.unified-design-system.orange.com/docs/${m.docsVersion}/assets/css/docs.css" rel="stylesheet" />
    <title>OUDS Web Example</title>
    <script defer src="${m.jsBundleCdn}"><\/script>
  </head>
  <body class="p-2xlarge m-none border-none ${n}">
    <!-- Example Code -->
  ${e.trimStart().replace(/^/gm,"    ").replace(/^ {4}$/gm,"").trimEnd()}
    <!-- End Example Code -->
  </body>
</html>`;let r="";t&&(r=Q.replace("export default () => {","const snippets_default = () => {"),r=`(() => {
  ${r}
  // <stdin>
  snippets_default();
})();`);const a={files:{"index.html":s,...t&&{"index.js":r}},title:"OUDS Web Example",description:`Official example from ${window.location.href}`,template:t?"javascript":"html",tags:["ouds-web"]};Y.openProject(a,{openFile:"index.html"})};
