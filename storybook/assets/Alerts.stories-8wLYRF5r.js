import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{t={title:`Components/Alerts`,parameters:{docs:{toc:!0}}},n=()=>`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none">
        <div class="alert alert-message alert-negative">
  <div class="alert-icon"><p class="visually-hidden">Negative alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h3 class="alert-label">Alert message</h3>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none">
        <div class="alert alert-info">
  <div class="alert-icon"><p class="visually-hidden">Positive alert</p></div>
  <p class="alert-label">Label</p>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message alert-negative">
  <div class="alert-icon"><p class="visually-hidden">Error</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Connection failed.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-positive">
  <div class="alert-icon"></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your payment has been successfully received.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">We’re processing your request.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-warning">
  <div class="alert-icon"><p class="visually-hidden">Be careful, </p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your data allowance is running low.</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
  </symbol>
</svg>

<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"></use></svg>
  <div>
    An example success alert with an icon
  </div>
</div>
<div class="alert alert-warning d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"></use></svg>
  <div>
    An example warning alert with an icon
  </div>
</div>
<div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"></use></svg>
  <div>
    An example danger alert with an icon
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your data plan includes free calls on weekends.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Upgrade your plan and get a free device.</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
  </symbol>
</svg>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"></use></svg>
  <div>
    An example alert with an icon
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your data plan includes free calls on weekends.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-accent" style="--bs-alert-icon: url(&quot;data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'&gt;&lt;path fill-rule='evenodd' d='M15.474 9.514 10 15.577 4.526 9.514l-.002-.003A2.868 2.868 0 0 1 8.69 5.572l.838.796.472.455.472-.455.838-.796.008-.008a2.868 2.868 0 0 1 4.159 3.947l-.003.003Zm1.251-5.302A4.78 4.78 0 0 0 10 4.18a4.78 4.78 0 0 0-6.815 6.7L10 18.393l6.815-7.514a4.78 4.78 0 0 0-.09-6.667Z'/&gt;&lt;/svg&gt;&quot;)">
  <div class="alert-icon"><p class="visually-hidden">Emphasized content</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Upgrade your plan and get a free device.</p>
    </div>
  </div>
</div>

<div class="alert alert-message">
  <div class="alert-icon">
    <span class="icon si si-settings" aria-hidden="true"></span>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your data plan includes free calls on weekends.</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label"><span class="visually-hidden">Emphasized content: </span>Your data plan includes free calls on weekends.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-accent">
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label"><span class="visually-hidden">Emphasized content: </span>Upgrade your plan and get a free device.</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <div class="use-rounded-corner-alert">
  <div class="alert alert-message mb-medium">
    <div class="alert-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      <p class="visually-hidden">Emphasized content</p>
    </div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Your data plan includes free calls on weekends.</p>
      </div>
    </div>
  </div>

  <div class="alert alert-message alert-positive">
    <div class="alert-icon"></div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Your payment has been successfully received.</p>
      </div>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label" id="closable-alert-accent">Accent alert</p>
    </div>
  </div>
  <div class="alert-action-container">
    <div class="alert-close-container">
      <button class="btn-close" data-bs-dismiss="alert" aria-labelledby="btn-close-alert closable-alert-accent" id="btn-close-alert">
        <span class="visually-hidden">Close</span>
      </button>
    </div>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
  </div>
  <div class="alert-action-container">
    <div class="alert-close-container">
      <button class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Close info alert</span>
      </button>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,f=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
    <button class="link">Action</button>
  </div>
  <div class="alert-action-container">
    <button class="btn-close" data-bs-dismiss="alert">
      <span class="visually-hidden">Close info alert</span>
    </button>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
  </div>
  <div class="alert-action-container">
    <button class="link">Action</button>
    <div class="alert-close-container">
      <button class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Close info alert</span>
      </button>
    </div>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
    <a href="#" class="link">Action</a>
  </div>
  <div class="alert-action-container">
    <button class="btn-close" data-bs-dismiss="alert">
      <span class="visually-hidden">Close info alert</span>
    </button>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
  </div>
  <div class="alert-action-container">
    <a href="#" class="link">Action</a>
    <div class="alert-close-container">
      <button class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Close info alert</span>
      </button>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h5 class="alert-label">Label</h5>
      <p>Description</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h5 class="alert-label">Label</h5>
      <ul>
        <li>Bullet text</li>
        <li>Bullet text</li>
        <li>Bullet text</li>
      </ul>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <div aria-busy="true" inert="">
  <div class="alert alert-info alert-message">
    <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Label</p>
      </div>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,g=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message alert-warning">
  <div class="alert-icon"><p class="visually-hidden">Warning alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h4 class="alert-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi. Curabitur eget hendrerit diam. Curabitur id placerat ipsum.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi. Curabitur eget hendrerit diam. Curabitur id placerat ipsum.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis.</li>
      </ul>
    </div>
    <a href="#" class="link">Action</a>
  </div>
  <div class="alert-action-container">
    <button class="btn-close" data-bs-dismiss="alert">
      <span class="visually-hidden">Close warning alert</span>
    </button>
  </div>
</div>

<div class="alert alert-message alert-positive">
  <div class="alert-icon"><p class="visually-hidden">Positive alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h4 class="alert-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi. Curabitur eget hendrerit diam. Curabitur id placerat ipsum.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi. Curabitur eget hendrerit diam. Curabitur id placerat ipsum.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis.</li>
      </ul>
    </div>
  </div>
  <div class="alert-action-container">
    <button class="link">Action</button>
    <button class="btn-close" data-bs-dismiss="alert">
      <span class="visually-hidden">Close positive alert</span>
    </button>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,_=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <div id="liveAlertPlaceholder" role="status" class="use-rounded-corner-alert d-flex flex-column gap-medium mb-medium">
  <div class="alert alert-message alert-positive">
    <div class="alert-icon"></div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Your payment has been successfully received.</p>
      </div>
    </div>
    <div class="alert-action-container">
      <div class="alert-close-container">
        <button class="btn-close" data-bs-dismiss="alert">
          <span class="visually-hidden">Close alert</span>
        </button>
      </div>
    </div>
  </div>
</div>
<button type="button" class="btn btn-brand" id="liveAlertBtn">Add live alert <span class="visually-hidden">just before this button</span></button>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,v=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-negative">
  <div class="alert-icon"><p class="visually-hidden">Error</p></div>
  <p class="alert-label">Connection failed.</p>
</div>

<div class="alert alert-positive">
  <div class="alert-icon"></div>
  <p class="alert-label">Your payment has been successfully received.</p>
</div>

<div class="alert alert-info">
  <div class="alert-icon"></div>
  <p class="alert-label">We’re processing your request.</p>
</div>

<div class="alert alert-warning">
  <div class="alert-icon"></div>
  <p class="alert-label"><span class="visually-hidden">Be careful, </span>Your data allowance is running low.</p>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,y=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Your data plan includes free calls on weekends.</p>
</div>

<div class="alert alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Upgrade your plan and get a free device.</p>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Your data plan includes free calls on weekends.</p>
</div>

<div class="alert alert-accent" style="--bs-alert-icon: url(&quot;data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'&gt;&lt;path fill-rule='evenodd' d='M15.474 9.514 10 15.577 4.526 9.514l-.002-.003A2.868 2.868 0 0 1 8.69 5.572l.838.796.472.455.472-.455.838-.796.008-.008a2.868 2.868 0 0 1 4.159 3.947l-.003.003Zm1.251-5.302A4.78 4.78 0 0 0 10 4.18a4.78 4.78 0 0 0-6.815 6.7L10 18.393l6.815-7.514a4.78 4.78 0 0 0-.09-6.667Z'/&gt;&lt;/svg&gt;&quot;)">
  <div class="alert-icon"><p class="visually-hidden">Emphasized content</p></div>
  <p class="alert-label">Upgrade your plan and get a free device.</p>
</div>

<div class="alert">
  <div class="alert-icon">
    <span class="icon si si-settings" aria-hidden="true"></span>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Your data plan includes free calls on weekends.</p>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,x=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <div aria-busy="true" inert="">
  <div class="alert alert-info">
    <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
    <p class="alert-label">Label</p>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,S=[`Alerts_0`,`Alerts_1`,`Alerts_2`,`Alerts_3`,`Alerts_4`,`Alerts_5`,`Alerts_6`,`Alerts_7`,`Alerts_8`,`Alerts_9`,`Alerts_10`,`Alerts_11`,`Alerts_12`,`Alerts_13`,`Alerts_14`,`Alerts_15`,`Alerts_16`,`Alerts_17`,`Alerts_18`,`Alerts_19`],n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none">
        <div class="alert alert-message alert-negative">
  <div class="alert-icon"><p class="visually-hidden">Negative alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h3 class="alert-label">Alert message</h3>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none">
        <div class="alert alert-info">
  <div class="alert-icon"><p class="visually-hidden">Positive alert</p></div>
  <p class="alert-label">Label</p>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message alert-negative">
  <div class="alert-icon"><p class="visually-hidden">Error</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Connection failed.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-positive">
  <div class="alert-icon"></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your payment has been successfully received.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">We’re processing your request.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-warning">
  <div class="alert-icon"><p class="visually-hidden">Be careful, </p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your data allowance is running low.</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
  </symbol>
</svg>

<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"></use></svg>
  <div>
    An example success alert with an icon
  </div>
</div>
<div class="alert alert-warning d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"></use></svg>
  <div>
    An example warning alert with an icon
  </div>
</div>
<div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"></use></svg>
  <div>
    An example danger alert with an icon
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your data plan includes free calls on weekends.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Upgrade your plan and get a free device.</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
  </symbol>
</svg>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"></use></svg>
  <div>
    An example alert with an icon
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your data plan includes free calls on weekends.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-accent" style="--bs-alert-icon: url(&quot;data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'&gt;&lt;path fill-rule='evenodd' d='M15.474 9.514 10 15.577 4.526 9.514l-.002-.003A2.868 2.868 0 0 1 8.69 5.572l.838.796.472.455.472-.455.838-.796.008-.008a2.868 2.868 0 0 1 4.159 3.947l-.003.003Zm1.251-5.302A4.78 4.78 0 0 0 10 4.18a4.78 4.78 0 0 0-6.815 6.7L10 18.393l6.815-7.514a4.78 4.78 0 0 0-.09-6.667Z'/&gt;&lt;/svg&gt;&quot;)">
  <div class="alert-icon"><p class="visually-hidden">Emphasized content</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Upgrade your plan and get a free device.</p>
    </div>
  </div>
</div>

<div class="alert alert-message">
  <div class="alert-icon">
    <span class="icon si si-settings" aria-hidden="true"></span>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Your data plan includes free calls on weekends.</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label"><span class="visually-hidden">Emphasized content: </span>Your data plan includes free calls on weekends.</p>
    </div>
  </div>
</div>

<div class="alert alert-message alert-accent">
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label"><span class="visually-hidden">Emphasized content: </span>Upgrade your plan and get a free device.</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <div class="use-rounded-corner-alert">
  <div class="alert alert-message mb-medium">
    <div class="alert-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
      </svg>
      <p class="visually-hidden">Emphasized content</p>
    </div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Your data plan includes free calls on weekends.</p>
      </div>
    </div>
  </div>

  <div class="alert alert-message alert-positive">
    <div class="alert-icon"></div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Your payment has been successfully received.</p>
      </div>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label" id="closable-alert-accent">Accent alert</p>
    </div>
  </div>
  <div class="alert-action-container">
    <div class="alert-close-container">
      <button class="btn-close" data-bs-dismiss="alert" aria-labelledby="btn-close-alert closable-alert-accent" id="btn-close-alert">
        <span class="visually-hidden">Close</span>
      </button>
    </div>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
  </div>
  <div class="alert-action-container">
    <div class="alert-close-container">
      <button class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Close info alert</span>
      </button>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
    <button class="link">Action</button>
  </div>
  <div class="alert-action-container">
    <button class="btn-close" data-bs-dismiss="alert">
      <span class="visually-hidden">Close info alert</span>
    </button>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
  </div>
  <div class="alert-action-container">
    <button class="link">Action</button>
    <div class="alert-close-container">
      <button class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Close info alert</span>
      </button>
    </div>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
    <a href="#" class="link">Action</a>
  </div>
  <div class="alert-action-container">
    <button class="btn-close" data-bs-dismiss="alert">
      <span class="visually-hidden">Close info alert</span>
    </button>
  </div>
</div>

<div class="alert alert-message alert-info">
  <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Info alert</p>
    </div>
  </div>
  <div class="alert-action-container">
    <a href="#" class="link">Action</a>
    <div class="alert-close-container">
      <button class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Close info alert</span>
      </button>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h5 class="alert-label">Label</h5>
      <p>Description</p>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h5 class="alert-label">Label</h5>
      <ul>
        <li>Bullet text</li>
        <li>Bullet text</li>
        <li>Bullet text</li>
      </ul>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <div aria-busy="true" inert="">
  <div class="alert alert-info alert-message">
    <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Label</p>
      </div>
    </div>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-message alert-warning">
  <div class="alert-icon"><p class="visually-hidden">Warning alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h4 class="alert-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi. Curabitur eget hendrerit diam. Curabitur id placerat ipsum.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi. Curabitur eget hendrerit diam. Curabitur id placerat ipsum.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis.</li>
      </ul>
    </div>
    <a href="#" class="link">Action</a>
  </div>
  <div class="alert-action-container">
    <button class="btn-close" data-bs-dismiss="alert">
      <span class="visually-hidden">Close warning alert</span>
    </button>
  </div>
</div>

<div class="alert alert-message alert-positive">
  <div class="alert-icon"><p class="visually-hidden">Positive alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h4 class="alert-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi. Curabitur eget hendrerit diam. Curabitur id placerat ipsum.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi. Curabitur eget hendrerit diam. Curabitur id placerat ipsum.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis.</li>
      </ul>
    </div>
  </div>
  <div class="alert-action-container">
    <button class="link">Action</button>
    <button class="btn-close" data-bs-dismiss="alert">
      <span class="visually-hidden">Close positive alert</span>
    </button>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <div id="liveAlertPlaceholder" role="status" class="use-rounded-corner-alert d-flex flex-column gap-medium mb-medium">
  <div class="alert alert-message alert-positive">
    <div class="alert-icon"></div>
    <div class="alert-container">
      <div class="alert-text-container">
        <p class="alert-label">Your payment has been successfully received.</p>
      </div>
    </div>
    <div class="alert-action-container">
      <div class="alert-close-container">
        <button class="btn-close" data-bs-dismiss="alert">
          <span class="visually-hidden">Close alert</span>
        </button>
      </div>
    </div>
  </div>
</div>
<button type="button" class="btn btn-brand" id="liveAlertBtn">Add live alert <span class="visually-hidden">just before this button</span></button>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert alert-negative">
  <div class="alert-icon"><p class="visually-hidden">Error</p></div>
  <p class="alert-label">Connection failed.</p>
</div>

<div class="alert alert-positive">
  <div class="alert-icon"></div>
  <p class="alert-label">Your payment has been successfully received.</p>
</div>

<div class="alert alert-info">
  <div class="alert-icon"></div>
  <p class="alert-label">We’re processing your request.</p>
</div>

<div class="alert alert-warning">
  <div class="alert-icon"></div>
  <p class="alert-label"><span class="visually-hidden">Be careful, </span>Your data allowance is running low.</p>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Your data plan includes free calls on weekends.</p>
</div>

<div class="alert alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Upgrade your plan and get a free device.</p>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none">
        <div class="alert">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Your data plan includes free calls on weekends.</p>
</div>

<div class="alert alert-accent" style="--bs-alert-icon: url(&quot;data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'&gt;&lt;path fill-rule='evenodd' d='M15.474 9.514 10 15.577 4.526 9.514l-.002-.003A2.868 2.868 0 0 1 8.69 5.572l.838.796.472.455.472-.455.838-.796.008-.008a2.868 2.868 0 0 1 4.159 3.947l-.003.003Zm1.251-5.302A4.78 4.78 0 0 0 10 4.18a4.78 4.78 0 0 0-6.815 6.7L10 18.393l6.815-7.514a4.78 4.78 0 0 0-.09-6.667Z'/&gt;&lt;/svg&gt;&quot;)">
  <div class="alert-icon"><p class="visually-hidden">Emphasized content</p></div>
  <p class="alert-label">Upgrade your plan and get a free device.</p>
</div>

<div class="alert">
  <div class="alert-icon">
    <span class="icon si si-settings" aria-hidden="true"></span>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Your data plan includes free calls on weekends.</p>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <div aria-busy="true" inert="">
  <div class="alert alert-info">
    <div class="alert-icon"><p class="visually-hidden">Info alert</p></div>
    <p class="alert-label">Label</p>
  </div>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-message alert-\\\${type}" \\\${type === 'negative' ? 'role="alert"' : ''}>\\\`,
      '  <div class="alert-icon">',
      \\\`    <p class="visually-hidden">\\\${typeVisuallyHidden} alert</p>\\\`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      \\\`      <h5 class="alert-label">\\\${message}</h5>\\\`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      \\\`        <span class="visually-hidden">Close \\\${type} alert</span>\\\`,
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
      appendAlert(\\\`Nice, you triggered this \\\${type} alert message!\\\`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...x.parameters?.docs?.source}}}})))()}C();export{n as Alerts_0,r as Alerts_1,f as Alerts_10,p as Alerts_11,m as Alerts_12,h as Alerts_13,g as Alerts_14,_ as Alerts_15,v as Alerts_16,y as Alerts_17,b as Alerts_18,x as Alerts_19,i as Alerts_2,a as Alerts_3,o as Alerts_4,s as Alerts_5,c as Alerts_6,l as Alerts_7,u as Alerts_8,d as Alerts_9,S as __namedExportsOrder,t as default};