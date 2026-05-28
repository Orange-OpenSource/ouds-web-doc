const Re={title:"Components/Table",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table">
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
</table> </div>
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
<\/script>`,t=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table">
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
</table> </div>
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
<\/script>`,l=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table table-striped">
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
</table> </div>
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
<\/script>`,c=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="table-responsive">
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
</div> </div>
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
<\/script>`,a=()=>`<div class="bd-example m-none border-none"><div class="sm:table-responsive"><table class="table"><caption>OUDS Web responsive table for sm breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,d=()=>`<div class="bd-example m-none border-none"><div class="md:table-responsive"><table class="table"><caption>OUDS Web responsive table for md breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,s=()=>`<div class="bd-example m-none border-none"><div class="lg:table-responsive"><table class="table"><caption>OUDS Web responsive table for lg breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,n=()=>`<div class="bd-example m-none border-none"><div class="xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,r=()=>`<div class="bd-example m-none border-none"><div class="2xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for 2xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,h=()=>`<div class="bd-example m-none border-none"><div class="3xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for 3xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,i=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-sm"><table class="table"><caption>Responsive table for sm breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,b=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-md"><table class="table"><caption>Responsive table for md breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,p=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-lg"><table class="table"><caption>Responsive table for lg breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,u=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-xl"><table class="table"><caption>Responsive table for xl breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,k=()=>`<div class="bd-example m-none border-none"><div class="table-responsive-xxl"><table class="table"><caption>Responsive table for xxl breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>`,w=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table" id="tableWithCheckboxes">
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
</table> </div>
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
<\/script>`,m=()=>`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table" id="tableWithRadios">
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
</table> </div>
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
<\/script>`,x=()=>`<div class="bd-example order-first m-none border-none table-responsive m-none border-none"> <table class="table">
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
          <use xlink:href="/orange/docs/1.3/assets/img/ouds-web-sprite.svg#file-earmark-richtext"></use>
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
        <img src="/orange/docs/1.3/assets/img/thumbnail.png" alt="" class="bm-large-icon me-xsmall">Cell
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
          <use xlink:href="/orange/docs/1.3/assets/img/ouds-web-sprite.svg#file-earmark-richtext"></use>
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
</table> </div>
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
<\/script>`,S=()=>`<div class="bd-example order-first m-none border-none table-responsive m-none border-none"> <table class="table">
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
          <use xlink:href="/orange/docs/1.3/assets/img/ouds-web-sprite.svg#file-earmark-richtext"></use>
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
        <img src="/orange/docs/1.3/assets/img/thumbnail.png" alt="" class="bm-large-icon me-xsmall">Cell
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
          <use xlink:href="/orange/docs/1.3/assets/img/ouds-web-sprite.svg#file-earmark-richtext"></use>
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
</table> </div>
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
<\/script>`;var C,g,A;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table">
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
</table> </div>
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
<\/script>\``,...(A=(g=e.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var v,y,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table">
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
</table> </div>
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
<\/script>\``,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var R,E,W;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table table-striped">
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
</table> </div>
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
<\/script>\``,...(W=(E=l.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,H,j;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <div class="table-responsive">
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
</div> </div>
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
<\/script>\``,...(j=(H=c.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var L,M,D;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="xs:table-responsive"><table class="table"><caption>OUDS Web responsive table for xs breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(D=(M=o.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var T,_,z;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="sm:table-responsive"><table class="table"><caption>OUDS Web responsive table for sm breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(z=(_=a.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var N,I,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="md:table-responsive"><table class="table"><caption>OUDS Web responsive table for md breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var U,B,K;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="lg:table-responsive"><table class="table"><caption>OUDS Web responsive table for lg breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(K=(B=s.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var F,G,J;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(J=(G=n.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var P,Q,V;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="2xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for 2xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(V=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="3xl:table-responsive"><table class="table"><caption>OUDS Web responsive table for 3xl breakpoint and under</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-sm"><table class="table"><caption>Responsive table for sm breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(te=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var le,ce,oe;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-md"><table class="table"><caption>Responsive table for md breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(oe=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};var ae,de,se;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-lg"><table class="table"><caption>Responsive table for lg breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(se=(de=p.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ne,re,he;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-xl"><table class="table"><caption>Responsive table for xl breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(he=(re=u.parameters)==null?void 0:re.docs)==null?void 0:he.source}}};var ie,be,pe;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`() => \`<div class="bd-example m-none border-none"><div class="table-responsive-xxl"><table class="table"><caption>Responsive table for xxl breakpoint and under (Bootstrap)</caption><thead><tr><th scope="col">#</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table></div></div>
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
<\/script>\``,...(pe=(be=k.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ue,ke,we;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table" id="tableWithCheckboxes">
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
</table> </div>
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
<\/script>\``,...(we=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var me,xe,Se;m.parameters={...m.parameters,docs:{...(me=m.parameters)==null?void 0:me.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none m-none border-none"> <table class="table" id="tableWithRadios">
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
</table> </div>
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
<\/script>\``,...(Se=(xe=m.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ce,ge,Ae;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none table-responsive m-none border-none"> <table class="table">
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
          <use xlink:href="/orange/docs/1.3/assets/img/ouds-web-sprite.svg#file-earmark-richtext"></use>
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
        <img src="/orange/docs/1.3/assets/img/thumbnail.png" alt="" class="bm-large-icon me-xsmall">Cell
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
          <use xlink:href="/orange/docs/1.3/assets/img/ouds-web-sprite.svg#file-earmark-richtext"></use>
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
</table> </div>
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
<\/script>\``,...(Ae=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:Ae.source}}};var ve,ye,fe;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-none border-none table-responsive m-none border-none"> <table class="table">
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
          <use xlink:href="/orange/docs/1.3/assets/img/ouds-web-sprite.svg#file-earmark-richtext"></use>
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
        <img src="/orange/docs/1.3/assets/img/thumbnail.png" alt="" class="bm-large-icon me-xsmall">Cell
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
          <use xlink:href="/orange/docs/1.3/assets/img/ouds-web-sprite.svg#file-earmark-richtext"></use>
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
</table> </div>
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
<\/script>\``,...(fe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};const Ee=["Table_0","Table_1","Table_2","Table_3","Table_4","Table_5","Table_6","Table_7","Table_8","Table_9","Table_10","Table_11","Table_12","Table_13","Table_14","Table_15","Table_16","Table_17","Table_18","Table_19"];export{e as Table_0,t as Table_1,h as Table_10,i as Table_11,b as Table_12,p as Table_13,u as Table_14,k as Table_15,w as Table_16,m as Table_17,x as Table_18,S as Table_19,l as Table_2,c as Table_3,o as Table_4,a as Table_5,d as Table_6,s as Table_7,n as Table_8,r as Table_9,Ee as __namedExportsOrder,Re as default};
