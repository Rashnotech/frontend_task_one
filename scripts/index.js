dt = new Date()
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurdsay", "Friday", "Saturday"]
day = days[dt.getUTCDay()]
time = dt.toISOString()

current_day = document.querySelector('.current_day')
current_time = document.querySelector('.current_time')

current_day.dataset.testid = day
current_day.textContent = day
current_time.dataset.testid = time
current_time.textContent = time
