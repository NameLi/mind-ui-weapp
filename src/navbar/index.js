Component({
  externalClasses: ['custom-class'],

  options: {
    addGlobalClass: true,
  },

  relations: {
    '../navbar-group/index': {
      type: 'parent',
      linked(target) {
        this.parent = target
      },
      unlinked() {
        this.parent = null
      }
    }
  },

  properties: {
    name: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      optionalTypes: [Number, String],
      value: ''
    }
  },

  data: {
    activeName: '',
    activeColor: ''
  },

  methods: {
    onClick(ev = null) {
      const parent = this.parent

      parent.triggerEvent('click', this.data.name)

      const baseLeft = parent.data.baseLeft

      const query = this.createSelectorQuery()

      query.select('.m-tab-item').boundingClientRect()
      query.select('.m-tab-item__text').boundingClientRect()

      query.exec(res => {
        const offsetLeft = ev ? ev.currentTarget.offsetLeft : res[0].left - baseLeft
        const itemWidth = res[0].width
        const textWidth = res[1].width

        parent.updateScrollPositon(offsetLeft, itemWidth, textWidth, this.data.name)
      })
    }
  }
})