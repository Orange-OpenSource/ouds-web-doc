const be={title:"Components/Alerts",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <div class="alert alert-message alert-negative">
  <div class="alert-icon"><p class="visually-hidden">Negative alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h3 class="alert-label">Alert message</h3>
    </div>
  </div>
</div> </div>
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
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <div class="alert alert-info">
  <div class="alert-icon"><p class="visually-hidden">Positive alert</p></div>
  <p class="alert-label">Label</p>
</div> </div>
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
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message alert-negative">
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
</div> </div>
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
<\/script>`,n=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
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
</div> </div>
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
<\/script>`,s=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Upgrade your plan and get a free device.</p>
    </div>
  </div>
</div> </div>
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
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
  </symbol>
</svg>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"></use></svg>
  <div>
    An example alert with an icon
  </div>
</div> </div>
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
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
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
</div> </div>
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
<\/script>`,d=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="use-rounded-corner-alert">
  <div class="alert alert-message mb-medium">
    <div class="alert-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>`,o=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message alert-info">
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
</div> </div>
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
<\/script>`,p=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h5 class="alert-label">Label</h5>
      <p>Description</p>
    </div>
  </div>
</div> </div>
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
<\/script>`,v=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>`,u=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message alert-warning">
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
</div> </div>
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
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div id="liveAlertPlaceholder" role="status" class="use-rounded-corner-alert d-flex flex-column gap-medium mb-medium">
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
<button type="button" class="btn btn-brand" id="liveAlertBtn">Add live alert <span class="visually-hidden">just before this button</span></button> </div>
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
<\/script>`,y=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-negative">
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
</div> </div>
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
<\/script>`,g=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Your data plan includes free calls on weekends.</p>
</div>

<div class="alert alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Upgrade your plan and get a free device.</p>
</div> </div>
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
<\/script>`,h=()=>`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>`;var b,f,A;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <div class="alert alert-message alert-negative">
  <div class="alert-icon"><p class="visually-hidden">Negative alert</p></div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h3 class="alert-label">Alert message</h3>
    </div>
  </div>
</div> </div>
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
<\/script>\``,...(A=(f=e.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var x,k,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none border-default border-thin border-bottom m-none border-none"> <div class="alert alert-info">
  <div class="alert-icon"><p class="visually-hidden">Positive alert</p></div>
  <p class="alert-label">Label</p>
</div> </div>
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
<\/script>\``,...(E=(k=t.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var w,$,B;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message alert-negative">
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
</div> </div>
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
<\/script>\``,...(B=($=a.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var j,L,I;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
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
</div> </div>
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
<\/script>\``,...(I=(L=n.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var M,C,H;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <p class="alert-label">Upgrade your plan and get a free device.</p>
    </div>
  </div>
</div> </div>
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
<\/script>\``,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var q,S,T;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
  </symbol>
</svg>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"></use></svg>
  <div>
    An example alert with an icon
  </div>
</div> </div>
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
<\/script>\``,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var V,W,z;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>\``,...(z=(W=i.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var P,D,_;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
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
</div> </div>
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
<\/script>\``,...(_=(D=r.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var N,Y,U;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="use-rounded-corner-alert">
  <div class="alert alert-message mb-medium">
    <div class="alert-icon">
      <svg aria-hidden="true">
        <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>\``,...(U=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var Z,O,F;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>\``,...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var G,J,K;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message alert-info">
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
</div> </div>
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
<\/script>\``,...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
  </div>
  <div class="alert-container">
    <div class="alert-text-container">
      <h5 class="alert-label">Label</h5>
      <p>Description</p>
    </div>
  </div>
</div> </div>
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
<\/script>\``,...(X=(R=p.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var ee,te,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>\``,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,le;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-message alert-warning">
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
</div> </div>
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
<\/script>\``,...(le=(se=u.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,re,de;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div id="liveAlertPlaceholder" role="status" class="use-rounded-corner-alert d-flex flex-column gap-medium mb-medium">
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
<button type="button" class="btn btn-brand" id="liveAlertBtn">Add live alert <span class="visually-hidden">just before this button</span></button> </div>
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
<\/script>\``,...(de=(re=m.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ce,oe,pe;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert alert-negative">
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
</div> </div>
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
<\/script>\``,...(pe=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var ve,ue,me;g.parameters={...g.parameters,docs:{...(ve=g.parameters)==null?void 0:ve.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Your data plan includes free calls on weekends.</p>
</div>

<div class="alert alert-accent">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
    </svg>
    <p class="visually-hidden">Emphasized content</p>
  </div>
  <p class="alert-label">Upgrade your plan and get a free device.</p>
</div> </div>
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
<\/script>\``,...(me=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,ge,he;h.parameters={...h.parameters,docs:{...(ye=h.parameters)==null?void 0:ye.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none d-flex flex-column gap-medium m-none border-none"> <div class="alert">
  <div class="alert-icon">
    <svg aria-hidden="true">
      <use xlink:href="/orange/docs/1.1/assets/img/ouds-web-sprite.svg#heart-empty"></use>
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
</div> </div>
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
<\/script>\``,...(he=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const fe=["Alerts_0","Alerts_1","Alerts_2","Alerts_3","Alerts_4","Alerts_5","Alerts_6","Alerts_7","Alerts_8","Alerts_9","Alerts_10","Alerts_11","Alerts_12","Alerts_13","Alerts_14","Alerts_15","Alerts_16","Alerts_17"];export{e as Alerts_0,t as Alerts_1,o as Alerts_10,p as Alerts_11,v as Alerts_12,u as Alerts_13,m as Alerts_14,y as Alerts_15,g as Alerts_16,h as Alerts_17,a as Alerts_2,n as Alerts_3,s as Alerts_4,l as Alerts_5,i as Alerts_6,r as Alerts_7,d as Alerts_8,c as Alerts_9,fe as __namedExportsOrder,be as default};
