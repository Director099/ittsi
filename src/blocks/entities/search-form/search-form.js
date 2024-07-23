const searchForm = new autoComplete({
  selector: "[data-autocomplite]",
  data: {
    src: async () => {
      try {
        const source = await fetch(`./js/search-form.json`);
        const data = await source.json();
        return data;
      } catch (error) {
        return error;
      }
    },
    keys: ["text"],
    cache: true,
  },
  resultItem: {
    element: (item, data) => {
      item.innerHTML = `<a class="link-search" href=${data.value.href}>${data.match}</a>`
    },
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        searchForm.input.value = selection;
      }
    }
  }
})
