import React, { useState, useEffect } from 'react'
import { ClockIcon } from '@heroicons/react/outline'

export const Timer = ({
  deadlineTimestamp,
  warningColor,
  warningLimit,
  standardColor,
  timerUpColor,
  borderColor,
  warningBorderColor,
  showFooterInfo,
  showTitle,
  useTimerFont,
  showTimerIcon,
}) => {
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [timerUp, setTimerUp] = useState(false)
  const [timeLeft, setTimeLeft] = useState(1)

  // let deadlineTimestamp = '2022-06-18 20:42:00-04'
  let dtArr = deadlineTimestamp.split(/[- :]/) // explode parts of date into array to universalize the date for more browsers
  let mobileFriendlyDateParse = new Date( // rebuild date string for more browser compatability
    dtArr[0],
    dtArr[1] - 1,
    dtArr[2],
    dtArr[3],
    dtArr[4],
    dtArr[5],
  )
  let countDownDate = new Date(mobileFriendlyDateParse).getTime()

  useEffect(() => {
    if (timerUp) return

    // Run myfunc every second
    const myfunc = setInterval(function () {
      let now = new Date().getTime() // TODO: make for all browsers⁄ https://stackoverflow.com/questions/5324178/javascript-date-parsing-on-iphone

      //let timeleft = countDownDate - now;
      setTimeLeft(countDownDate - now)

      let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

      // Calculating the days, hours, minutes and seconds left
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)

      // Display the message when countdown is over
      if (timeLeft < 0) {
        clearInterval(myfunc)
        setDays('')
        setHours('')
        setMinutes('')
        setSeconds('')
        setTimerUp(true)
      }
    }, 1000)

    return () => {
      // this runs as the clean up function for the useEffect
      clearInterval(myfunc)
    }
  }, [days, hours, minutes, seconds, countDownDate, timeLeft, timerUp])

  return (
    <section
      style={{
        margin: '0 auto',
        padding: '4rem 0',
        display: 'flex',
        flexDirection: 'column',
        height: '50px',
        justifyContent: 'center',
      }}
    >
      <div>
        {showTitle && (
          <>
            <div
              style={{
                color: borderColor,
                padding: '.5rem',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '1.5rem' }}>
                {showTitle}{' '}
                {showTimerIcon && (
                  <ClockIcon style={{ height: '1.5rem', width: '1.5rem' }} />
                )}
              </h3>
            </div>
          </>
        )}
      </div>

      {/* when timer is up */}
      {timeLeft < 0 || timerUp ? (
        <div style={{ alignSelf: 'center', color: timerUpColor }}>
          <p>TIMER UP!!!</p>
          <p>
            <small>Your time was up at {deadlineTimestamp}</small>
          </p>
        </div>
      ) : (
        // while timer is active
        <div
          style={{
            alignSelf: 'center',
            color: standardColor,
            fontFamily: useTimerFont ? `Chakra Petch` : `inherit`,
          }}
        >
          {seconds !== '' && days + hours + minutes + seconds > 0 && (
            <div
              style={{
                display: 'flex',
                gap: '.5rem',
                color:
                  !warningLimit || !warningColor
                    ? standardColor
                    : timeLeft > warningLimit - 1000
                    ? standardColor
                    : warningColor,
              }}
            >
              <div
                style={{
                  padding: '.5rem .5rem',
                  border: `2px solid`,
                  borderColor:
                    !warningLimit || !warningBorderColor
                      ? borderColor
                      : timeLeft > warningLimit - 1000
                      ? borderColor
                      : warningBorderColor,
                  width: '75px',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}
              >
                <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                  {days} d
                </p>
              </div>

              <div
                style={{
                  padding: '.5rem .5rem',
                  border: `2px solid`,
                  borderColor:
                    !warningLimit || !warningBorderColor
                      ? borderColor
                      : timeLeft > warningLimit - 1000
                      ? borderColor
                      : warningBorderColor,
                  width: '75px',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}
              >
                <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                  {hours} h
                </p>
              </div>

              <div
                style={{
                  padding: '.5rem .5rem',
                  border: `2px solid`,
                  borderColor:
                    !warningLimit || !warningBorderColor
                      ? borderColor
                      : timeLeft > warningLimit - 1000
                      ? borderColor
                      : warningBorderColor,
                  width: '75px',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}
              >
                <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                  {minutes} m
                </p>
              </div>

              <div
                style={{
                  padding: '.5rem .5rem',
                  border: `2px solid`,
                  borderColor:
                    !warningLimit || !warningBorderColor
                      ? borderColor
                      : timeLeft > warningLimit - 1000
                      ? borderColor
                      : warningBorderColor,
                  width: '75px',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}
              >
                <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                  {seconds} s
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <div>
        {showFooterInfo && (
          <>
            <div
              style={{
                color: borderColor,
                padding: '.5rem',
                textAlign: 'center',
                fontFamily: 'inherit',
              }}
            >
              <p>Your deadline is set for {deadlineTimestamp}</p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
