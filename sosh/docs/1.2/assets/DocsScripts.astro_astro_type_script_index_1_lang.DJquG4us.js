const A="https://stackblitz.com",S=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],$=["project","search","ports","settings"],P=["light","dark"],B=["editor","preview"],k={clickToLoad:e=>d("ctl",e),devToolsHeight:e=>T("devtoolsheight",e),forceEmbedLayout:e=>d("embed",e),hideDevTools:e=>d("hidedevtools",e),hideExplorer:e=>d("hideExplorer",e),hideNavigation:e=>d("hideNavigation",e),openFile:e=>u("file",e),showSidebar:e=>L("showSidebar",e),sidebarView:e=>y("sidebarView",e,$),startScript:e=>u("startScript",e),terminalHeight:e=>T("terminalHeight",e),theme:e=>y("theme",e,P),view:e=>y("view",e,B),zenMode:e=>d("zenMode",e),organization:e=>`${u("orgName",e?.name)}&${u("orgProvider",e?.provider)}`,crossOriginIsolated:e=>d("corp",e)};function _(e={}){const t=Object.entries(e).map(([n,o])=>o!=null&&k.hasOwnProperty(n)?k[n](o):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function d(e,t){return t===!0?`${e}=1`:""}function L(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function T(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function y(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function u(e,t){return(Array.isArray(t)?t:[t]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${e}=${encodeURIComponent(o)}`).join("&")}function I(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function b(e,t){return`${j(t)}${e}${_(t)}`}function g(e,t){const n={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(n,t),`${j(n)}${e}${_(n)}`}function j(e={}){return(typeof e.origin=="string"?e.origin:A).replace(/\/$/,"")}function v(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),M(t,n),D(e,t,n),e.replaceWith(t)}function E(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function w(e){return e&&e.newWindow===!1?"_self":"_blank"}function M(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}function D(e,t,n={}){const o=e.allow?.split(";")?.map(s=>s.trim())??[];n.crossOriginIsolated&&!o.includes("cross-origin-isolated")&&o.push("cross-origin-isolated"),o.length>0&&(t.allow=o.join("; "))}class N{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:n}){return new Promise((o,s)=>{const r=I();this.pending[r]={resolve:o,reject:s},this.port.postMessage({type:t,payload:{...n,__reqid:r}})})}messageListener(t){if(typeof t.data.payload?.__reqid!="string")return;const{type:n,payload:o}=t.data,{__reqid:s,__success:r,__error:i}=o;this.pending[s]&&(r?this.pending[s].resolve(this.cleanResult(o)):this.pending[s].reject(i?`${n}: ${i}`:n),delete this.pending[s])}cleanResult(t){const n={...t};return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}}class O{constructor(t,n){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>o?.url??null),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new N(t),Object.defineProperty(this.preview,"origin",{value:typeof n.previewOrigin=="string"?n.previewOrigin:null,writable:!1})}applyFsDiff(t){const n=o=>o!==null&&typeof o=="object";if(!n(t)||!n(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const h=[];class q{constructor(t){this.id=I(),this.element=t,this.pending=new Promise((n,o)=>{const s=({data:l,ports:c})=>{l?.action==="SDK_INIT_SUCCESS"&&l.id===this.id&&(this.vm=new O(c[0],l.payload),n(this.vm),i())},r=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(p),window.removeEventListener("message",s)}window.addEventListener("message",s),r();let a=0;const p=window.setInterval(()=>{if(this.vm){i();return}if(a>=20){i(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),h.forEach((l,c)=>{l.id===this.id&&h.splice(c,1)});return}a++,r()},500)}),h.push(this)}}const R=e=>{const t=e instanceof Element?"element":"id";return h.find(n=>n[t]===e)??null};function U(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function F(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function C({template:e,title:t,description:n,dependencies:o,files:s,settings:r}){if(!S.includes(e)){const l=S.map(c=>`'${c}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${l}`)}const i=[],a=(l,c,x="")=>{i.push(U(l,typeof c=="string"?c:x))};a("project[title]",t),typeof n=="string"&&n.length>0&&a("project[description]",n),a("project[template]",e,"javascript"),o&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a("project[dependencies]",JSON.stringify(o))),r&&a("project[settings]",JSON.stringify(r)),Object.entries(s).forEach(([l,c])=>{a(`project[files][${F(l)}]`,c)});const p=document.createElement("form");return p.method="POST",p.setAttribute("style","display:none!important;"),p.append(...i),p}function H(e,t){const n=C(e);return n.action=g("/run",t),n.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function W(e,t){const n=C(e);n.action=b("/run",t),n.target=w(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function f(e){return e?.contentWindow?(R(e)??new q(e)).pending:Promise.reject("Provided element is not an iframe.")}function V(e,t){W(e,t)}function z(e,t){const n=b(`/edit/${e}`,t),o=w(t);window.open(n,o)}function K(e,t){const n=b(`/github/${e}`,t),o=w(t);window.open(n,o)}function G(e,t,n){const o=E(e),s=H(t,n),r=document.createElement("iframe");return v(o,r,n),r.contentDocument?.write(s),f(r)}function J(e,t,n){const o=E(e),s=document.createElement("iframe");return s.src=g(`/edit/${t}`,n),v(o,s,n),f(s)}function X(e,t,n){const o=E(e),s=document.createElement("iframe");return s.src=g(`/github/${t}`,n),v(o,s,n),f(s)}const Y={connect:f,embedGithubProject:X,embedProject:G,embedProjectId:J,openGithubProject:K,openProject:V,openProjectId:z},Q=`// NOTICE!!! Initially embedded in our docs this JavaScript
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
}
`,m={cssCdn:"https://cdn.jsdelivr.net/npm/@ouds/web-sosh@1.2.0/dist/css/ouds-web.min.css",cssBootstrapCdn:"https://cdn.jsdelivr.net/npm/@ouds/web-sosh@1.2.0/dist/css/ouds-web-bootstrap.min.css",jsBundleCdn:"https://cdn.jsdelivr.net/npm/@ouds/web-common@1.2.0/dist/js/ouds-web.bundle.min.js",docsVersion:"1.2"};document.querySelectorAll(".btn-edit").forEach(e=>{e.addEventListener("click",t=>{const n=t.target.closest(".bd-code-snippet"),o=n.querySelector(".bd-example"),s=o.innerHTML,r=n.querySelector(".btn-edit").getAttribute("data-sb-js-snippet"),i=n.closest("[data-sb-css-bootstrap]"),a=Array.from(o.classList).join(" ");Z(s,r,a,i)})});const Z=(e,t,n,o)=>{const s=`<!doctype html>
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
})();`);const i={files:{"index.html":s,...t&&{"index.js":r}},title:"OUDS Web Example",description:`Official example from ${window.location.href}`,template:t?"javascript":"html",tags:["ouds-web"]};Y.openProject(i,{openFile:"index.html"})};
