<template>
  <div class="min-h-dvh flex items-center justify-center p-4">
    <div 
      v-if="!timeUp"
      class="space-y-16"
    >
      <div>
        <DisplayTime :time="timeLeft.months" unit-key="month" />
        <DisplayTime :time="timeLeft.weeks" unit-key="week" />
        <DisplayTime :time="timeLeft.days" unit-key="day" />
      </div>
      <div>
        <DisplayTime :time="timeLeft.hours" unit-key="hour" />
        <DisplayTime :time="timeLeft.minutes" unit-key="minute" />
        <DisplayTime :time="timeLeft.seconds" unit-key="second" />
      </div>
    </div>

    <div v-else class="text-6xl font-bold">
      Cheguei 🎉!
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Time Left'
})

interface TimeLeft {
  months: number
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
}


const targetDate = new Date('2026-02-05T23:25:00-03:00')

const timeLeft = ref<TimeLeft>({
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const timeUp = ref(false)

const calculateTimeLeft = () => {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference > 0) {
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7))
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    timeLeft.value = {
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }

    timeUp.value = false
  } else {
    timeUp.value = true
  }
}

calculateTimeLeft()

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>
