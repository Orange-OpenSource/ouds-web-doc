import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{t={title:`Components/Table`,parameters:{docs:{toc:!0}}},n=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table">
  <caption class="visually-hidden">OUDS Web basic table</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,r=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table">
  <caption class="visually-hidden">OUDS Web table with functional colored backgrounds</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Status</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-info">
      <th scope="row">1</th>
      <td><span class="badge badge-info me-xsmall"></span>Running</td>
      <td>Cell</td>
    </tr>
    <tr class="table-positive">
      <th scope="row">2</th>
      <td><span class="badge badge-positive me-xsmall"></span>New</td>
      <td>Cell</td>
    </tr>
    <tr class="table-warning">
      <th scope="row">3</th>
      <td><span class="badge badge-warning me-xsmall"></span>Reloading</td>
      <td>Cell</td>
    </tr>
    <tr class="table-negative">
      <th scope="row">4</th>
      <td><span class="badge badge-negative me-xsmall"></span>Error</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,i=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table table-striped">
  <caption class="visually-hidden">OUDS Web zebra table</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,a=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <div class="table-responsive">
  <table class="table">
    <caption class="visually-hidden">OUDS Web responsive table</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,o=()=>`<div class="bd-example m-none border-none"><div class="xs:table-responsive"><table class="table"><caption>OUDS Web responsive table for xs breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,s=()=>`<div class="bd-example m-none border-none"><div class="sm:table-responsive"><table class="table"><caption>OUDS Web responsive table for sm breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,c=()=>`<div class="bd-example m-none border-none"><div class="md:table-responsive"><table class="table"><caption>OUDS Web responsive table for md breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,l=()=>`<div class="bd-example m-none border-none"><div class="lg:table-responsive"><table class="table"><caption>OUDS Web responsive table for lg breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,u=()=>`<div class="bd-example m-none border-none"><div class="xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,d=()=>`<div class="bd-example m-none border-none"><div class="2xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for 2xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,f=()=>`<div class="bd-example m-none border-none"><div class="3xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for 3xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,p=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-sm"><table class="table"><caption>Responsive table for sm breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,m=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-md"><table class="table"><caption>Responsive table for md breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,h=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-lg"><table class="table"><caption>Responsive table for lg breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,g=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-xl"><table class="table"><caption>Responsive table for xl breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,_=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-xxl"><table class="table"><caption>Responsive table for xxl breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,v=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table" id="tableWithCheckboxes">
  <caption class="visually-hidden">OUDS Web table with row selection</caption>
  <thead>
    <tr>
      <th scope="col">
        <label class="checkbox-standalone">
          <input class="control-item-indicator" type="checkbox" value="all" id="tableSelectAll">
          <span class="visually-hidden">Select all rows</span>
        </label>
      </th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr data-bs-theme="dark">
      <td>
        <label class="checkbox-standalone">
          <input class="control-item-indicator" type="checkbox" value="1" checked="">
          <span class="visually-hidden">Select row 1</span>
        </label>
      </td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>
        <label class="checkbox-standalone">
          <input class="control-item-indicator" type="checkbox" value="2">
          <span class="visually-hidden">Select row 2</span>
        </label>
      </td>
      <td>This is a much longer section of text that demonstrates what happens when text wraps within a cell in a table</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr data-bs-theme="dark">
      <td>
        <label class="checkbox-standalone">
          <input class="control-item-indicator" type="checkbox" value="3" checked="">
          <span class="visually-hidden">Select row 3</span>
        </label>
      </td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,y=()=>`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table" id="tableWithRadios">
  <caption class="visually-hidden">OUDS Web table with radio buttons</caption>
  <thead>
    <tr>
      <th scope="col">Select</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <label class="radio-button-standalone">
          <input class="control-item-indicator" type="radio" name="radio1" value="1">
          <span class="visually-hidden">Select row 1</span>
        </label>
      </td>
      <td>This is a much longer section of text that demonstrates what happens when text wraps within a cell in a table</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr data-bs-theme="dark">
      <td>
        <label class="radio-button-standalone">
          <input class="control-item-indicator" type="radio" name="radio1" value="2" checked="">
          <span class="visually-hidden">Select row 2</span>
        </label>
      </td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>
        <label class="radio-button-standalone">
          <input class="control-item-indicator" type="radio" name="radio1" value="3">
          <span class="visually-hidden">Select row 3</span>
        </label>
      </td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,b=()=>`<div class="bd-example order-first m-none border-none table-responsive m-none border-none">
        <table class="table">
  <caption class="visually-hidden">OUDS Web table with components and icons</caption>
  <thead>
    <tr>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col" class="text-center">Heading</th>
      <th scope="col">Activated</th>
    </tr>
  </thead>
  <tbody>
    <tr class="align-middle">
      <td>
        <svg class="bm-large-icon me-xsmall" aria-hidden="true">
          <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#file-document"></use>
        </svg>Cell
      </td>
      <td>This is a much longer section of text that demonstrates what happens when text wraps within a cell in a table</td>
      <td>
        <p class="tag tag-warning tag-small">
          <span class="tag-status-icon"></span>
          Maintenance
        </p>
      </td>
      <td class="text-center">
        <p class="badge badge-warning badge-large align-middle">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">Warning</span>
        </p>
      </td>
      <td>
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="1">
          <span class="visually-hidden">Select row 1</span>
        </label>
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <img src="/orange/docs/1.5/assets/img/thumbnail.png" alt="" class="bm-large-icon me-xsmall">Cell
      </td>
      <td>Cell</td>
      <td>
        <p class="tag tag-positive tag-small">
          <span class="tag-status-icon"></span>
          Running
        </p>
      </td>
      <td class="text-center">
        <p class="badge badge-positive badge-large align-middle">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">OK</span>
        </p>
      </td>
      <td>
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="2" checked="">
          <span class="visually-hidden">Select row 2</span>
        </label>
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <svg class="bm-large-icon me-xsmall" aria-hidden="true">
          <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#file-document"></use>
        </svg>Cell
      </td>
      <td>Cell</td>
      <td>
        <p class="tag tag-negative tag-small">
          <span class="tag-status-icon"></span>
          Error
        </p>
      </td>
      <td class="text-center">
        <p class="badge badge-large align-middle">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">Error</span>
        </p>
      </td>
      <td>
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="3">
          <span class="visually-hidden">Select row 3</span>
        </label>
      </td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,x=()=>`<div class="bd-example order-first m-none border-none table-responsive m-none border-none">
        <table class="table">
  <caption class="visually-hidden">OUDS Web table with components and icons preserving the row height</caption>
  <thead>
    <tr>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col" class="text-center">Heading</th>
      <th scope="col" class="text-center">Activated</th>
    </tr>
  </thead>
  <tbody>
    <tr class="align-middle">
      <td>
        <svg class="bm-large-icon me-xsmall" aria-hidden="true">
          <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#file-document"></use>
        </svg>Cell
      </td>
      <td>This is a much longer section of text that demonstrates what happens when text wraps within a cell in a table</td>
      <td class="table-cell-component">
        <p class="tag tag-warning tag-small">
          <span class="tag-status-icon"></span>
          Maintenance
        </p>
      </td>
      <td class="text-center table-cell-component">
        <p class="badge badge-warning badge-large">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">Warning</span>
        </p>
      </td>
      <td class="table-cell-component">
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="1">
          <span class="visually-hidden">Select row 1</span>
        </label>
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <img src="/orange/docs/1.5/assets/img/thumbnail.png" alt="" class="bm-large-icon me-xsmall">Cell
      </td>
      <td>Cell</td>
      <td class="table-cell-component">
        <p class="tag tag-positive tag-small">
          <span class="tag-status-icon"></span>
          Running
        </p>
      </td>
      <td class="text-center table-cell-component">
        <p class="badge badge-positive badge-large">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">OK</span>
        </p>
      </td>
      <td class="table-cell-component">
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="2" checked="">
          <span class="visually-hidden">Select row 2</span>
        </label>
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <svg class="bm-large-icon me-xsmall" aria-hidden="true">
          <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#file-document"></use>
        </svg>Cell
      </td>
      <td>Cell</td>
      <td class="table-cell-component">
        <p class="tag tag-negative tag-small">
          <span class="tag-status-icon"></span>
          Error
        </p>
      </td>
      <td class="text-center table-cell-component">
        <p class="badge badge-large">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">Error</span>
        </p>
      </td>
      <td class="table-cell-component">
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="3">
          <span class="visually-hidden">Select row 3</span>
        </label>
      </td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>`,S=[`Table_0`,`Table_1`,`Table_2`,`Table_3`,`Table_4`,`Table_5`,`Table_6`,`Table_7`,`Table_8`,`Table_9`,`Table_10`,`Table_11`,`Table_12`,`Table_13`,`Table_14`,`Table_15`,`Table_16`,`Table_17`,`Table_18`,`Table_19`],n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table">
  <caption class="visually-hidden">OUDS Web basic table</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table">
  <caption class="visually-hidden">OUDS Web table with functional colored backgrounds</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Status</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-info">
      <th scope="row">1</th>
      <td><span class="badge badge-info me-xsmall"></span>Running</td>
      <td>Cell</td>
    </tr>
    <tr class="table-positive">
      <th scope="row">2</th>
      <td><span class="badge badge-positive me-xsmall"></span>New</td>
      <td>Cell</td>
    </tr>
    <tr class="table-warning">
      <th scope="row">3</th>
      <td><span class="badge badge-warning me-xsmall"></span>Reloading</td>
      <td>Cell</td>
    </tr>
    <tr class="table-negative">
      <th scope="row">4</th>
      <td><span class="badge badge-negative me-xsmall"></span>Error</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table table-striped">
  <caption class="visually-hidden">OUDS Web zebra table</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <div class="table-responsive">
  <table class="table">
    <caption class="visually-hidden">OUDS Web responsive table</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="xs:table-responsive"><table class="table"><caption>OUDS Web responsive table for xs breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="sm:table-responsive"><table class="table"><caption>OUDS Web responsive table for sm breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="md:table-responsive"><table class="table"><caption>OUDS Web responsive table for md breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="lg:table-responsive"><table class="table"><caption>OUDS Web responsive table for lg breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="2xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for 2xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="3xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for 3xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-sm"><table class="table"><caption>Responsive table for sm breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-md"><table class="table"><caption>Responsive table for md breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-lg"><table class="table"><caption>Responsive table for lg breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-xl"><table class="table"><caption>Responsive table for xl breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-xxl"><table class="table"><caption>Responsive table for xxl breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table" id="tableWithCheckboxes">
  <caption class="visually-hidden">OUDS Web table with row selection</caption>
  <thead>
    <tr>
      <th scope="col">
        <label class="checkbox-standalone">
          <input class="control-item-indicator" type="checkbox" value="all" id="tableSelectAll">
          <span class="visually-hidden">Select all rows</span>
        </label>
      </th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr data-bs-theme="dark">
      <td>
        <label class="checkbox-standalone">
          <input class="control-item-indicator" type="checkbox" value="1" checked="">
          <span class="visually-hidden">Select row 1</span>
        </label>
      </td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>
        <label class="checkbox-standalone">
          <input class="control-item-indicator" type="checkbox" value="2">
          <span class="visually-hidden">Select row 2</span>
        </label>
      </td>
      <td>This is a much longer section of text that demonstrates what happens when text wraps within a cell in a table</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr data-bs-theme="dark">
      <td>
        <label class="checkbox-standalone">
          <input class="control-item-indicator" type="checkbox" value="3" checked="">
          <span class="visually-hidden">Select row 3</span>
        </label>
      </td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none">
        <table class="table" id="tableWithRadios">
  <caption class="visually-hidden">OUDS Web table with radio buttons</caption>
  <thead>
    <tr>
      <th scope="col">Select</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <label class="radio-button-standalone">
          <input class="control-item-indicator" type="radio" name="radio1" value="1">
          <span class="visually-hidden">Select row 1</span>
        </label>
      </td>
      <td>This is a much longer section of text that demonstrates what happens when text wraps within a cell in a table</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr data-bs-theme="dark">
      <td>
        <label class="radio-button-standalone">
          <input class="control-item-indicator" type="radio" name="radio1" value="2" checked="">
          <span class="visually-hidden">Select row 2</span>
        </label>
      </td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>
        <label class="radio-button-standalone">
          <input class="control-item-indicator" type="radio" name="radio1" value="3">
          <span class="visually-hidden">Select row 3</span>
        </label>
      </td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none table-responsive m-none border-none">
        <table class="table">
  <caption class="visually-hidden">OUDS Web table with components and icons</caption>
  <thead>
    <tr>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col" class="text-center">Heading</th>
      <th scope="col">Activated</th>
    </tr>
  </thead>
  <tbody>
    <tr class="align-middle">
      <td>
        <svg class="bm-large-icon me-xsmall" aria-hidden="true">
          <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#file-document"></use>
        </svg>Cell
      </td>
      <td>This is a much longer section of text that demonstrates what happens when text wraps within a cell in a table</td>
      <td>
        <p class="tag tag-warning tag-small">
          <span class="tag-status-icon"></span>
          Maintenance
        </p>
      </td>
      <td class="text-center">
        <p class="badge badge-warning badge-large align-middle">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">Warning</span>
        </p>
      </td>
      <td>
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="1">
          <span class="visually-hidden">Select row 1</span>
        </label>
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <img src="/orange/docs/1.5/assets/img/thumbnail.png" alt="" class="bm-large-icon me-xsmall">Cell
      </td>
      <td>Cell</td>
      <td>
        <p class="tag tag-positive tag-small">
          <span class="tag-status-icon"></span>
          Running
        </p>
      </td>
      <td class="text-center">
        <p class="badge badge-positive badge-large align-middle">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">OK</span>
        </p>
      </td>
      <td>
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="2" checked="">
          <span class="visually-hidden">Select row 2</span>
        </label>
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <svg class="bm-large-icon me-xsmall" aria-hidden="true">
          <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#file-document"></use>
        </svg>Cell
      </td>
      <td>Cell</td>
      <td>
        <p class="tag tag-negative tag-small">
          <span class="tag-status-icon"></span>
          Error
        </p>
      </td>
      <td class="text-center">
        <p class="badge badge-large align-middle">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">Error</span>
        </p>
      </td>
      <td>
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="3">
          <span class="visually-hidden">Select row 3</span>
        </label>
      </td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none table-responsive m-none border-none">
        <table class="table">
  <caption class="visually-hidden">OUDS Web table with components and icons preserving the row height</caption>
  <thead>
    <tr>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col" class="text-center">Heading</th>
      <th scope="col" class="text-center">Activated</th>
    </tr>
  </thead>
  <tbody>
    <tr class="align-middle">
      <td>
        <svg class="bm-large-icon me-xsmall" aria-hidden="true">
          <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#file-document"></use>
        </svg>Cell
      </td>
      <td>This is a much longer section of text that demonstrates what happens when text wraps within a cell in a table</td>
      <td class="table-cell-component">
        <p class="tag tag-warning tag-small">
          <span class="tag-status-icon"></span>
          Maintenance
        </p>
      </td>
      <td class="text-center table-cell-component">
        <p class="badge badge-warning badge-large">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">Warning</span>
        </p>
      </td>
      <td class="table-cell-component">
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="1">
          <span class="visually-hidden">Select row 1</span>
        </label>
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <img src="/orange/docs/1.5/assets/img/thumbnail.png" alt="" class="bm-large-icon me-xsmall">Cell
      </td>
      <td>Cell</td>
      <td class="table-cell-component">
        <p class="tag tag-positive tag-small">
          <span class="tag-status-icon"></span>
          Running
        </p>
      </td>
      <td class="text-center table-cell-component">
        <p class="badge badge-positive badge-large">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">OK</span>
        </p>
      </td>
      <td class="table-cell-component">
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="2" checked="">
          <span class="visually-hidden">Select row 2</span>
        </label>
      </td>
    </tr>
    <tr class="align-middle">
      <td>
        <svg class="bm-large-icon me-xsmall" aria-hidden="true">
          <use xlink:href="/orange/docs/1.5/assets/img/ouds-web-sprite.svg#file-document"></use>
        </svg>Cell
      </td>
      <td>Cell</td>
      <td class="table-cell-component">
        <p class="tag tag-negative tag-small">
          <span class="tag-status-icon"></span>
          Error
        </p>
      </td>
      <td class="text-center table-cell-component">
        <p class="badge badge-large">
          <span class="badge-status-icon"></span>
          <span class="visually-hidden">Error</span>
        </p>
      </td>
      <td class="table-cell-component">
        <label class="switch-standalone">
          <input class="control-item-indicator" type="checkbox" role="switch" value="3">
          <span class="visually-hidden">Select row 3</span>
        </label>
      </td>
    </tr>
  </tbody>
</table>
      </div>
<script type="text/javascript">
  /* global oudsWeb: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
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
<\/script>\``,...x.parameters?.docs?.source}}}})))()}C();export{n as Table_0,r as Table_1,f as Table_10,p as Table_11,m as Table_12,h as Table_13,g as Table_14,_ as Table_15,v as Table_16,y as Table_17,b as Table_18,x as Table_19,i as Table_2,a as Table_3,o as Table_4,s as Table_5,c as Table_6,l as Table_7,u as Table_8,d as Table_9,S as __namedExportsOrder,t as default};