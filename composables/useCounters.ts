export const useCounters = () => {
  type Counter = {
    id: number
    title: string
    count: number
  }

  let uid = 0
  const defaultTitle = 'new'

  const counters = shallowRef<Counter[]>([
    {
      id: uid++,
      title: defaultTitle,
      count: 0,
    },
  ])

  const increment = (targetCounter: Counter) => {
    counters.value = counters.value.map((counter) => {
      return counter === targetCounter
        ? {
            ...counter,
            count: counter.count + 1,
          }
        : counter
    })
  }

  const decrement = (targetCounter: Counter) => {
    counters.value = counters.value.map((counter) => {
      return counter === targetCounter && counter.count > 0
        ? {
            ...counter,
            count: counter.count - 1,
          }
        : counter
    })
  }

  const reset = (targetCounter: Counter) => {
    counters.value = counters.value.map((counter) => {
      return counter === targetCounter
        ? {
            ...counter,
            count: 0,
          }
        : counter
    })
  }

  const updateTitle = (targetCounter: Counter, newTitle: string) => {
    counters.value = counters.value.map((counter) => {
      return counter === targetCounter
        ? {
            ...counter,
            title: newTitle,
          }
        : counter
    })
  }

  const deleteCounter = (targetCounter: Counter) => {
    counters.value = counters.value.filter((counter) => counter !== targetCounter)
  }

  const addCounter = () => {
    counters.value = counters.value.concat({
      id: uid++,
      title: defaultTitle,
      count: 0,
    })
  }

  const sum = computed(() => {
    return counters.value.reduce((accumulator: number, counter: Counter) => {
      return accumulator + counter.count
    }, 0)
  })

  return {
    counters,
    increment,
    decrement,
    reset,
    updateTitle,
    deleteCounter,
    addCounter,
    sum,
  }
}
