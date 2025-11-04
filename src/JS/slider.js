class Slider {
		
		constructor(list, func) {
			this.imageCount = 0 
			this.list = list
			this.func = func
			this.startAutoScroll = null
			this.timer = 5000
		}

		setCount(count) {	
			this.imageCount = count

		}

		getCount(){
			return this.imageCount
		}

		setTimer(count){
			this.timer = count 
		}

		Scroll() {
			this.imageCount += 1
			if (this.imageCount < this.list.length) {
				this.func(this.imageCount, this.list)

			} else {
				this.imageCount = 0
				this.func(this.imageCount, this.list)
			}
		}

		startScroll() {
			if (this.startAutoScroll) {
				clearInterval(this.startAutoScroll)
			} 

			this.startAutoScroll = setInterval(this.Scroll.bind(this), this.timer)
		}
	}


    export {Slider}