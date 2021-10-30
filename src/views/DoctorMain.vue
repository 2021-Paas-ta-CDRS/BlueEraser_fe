<template>
  <div class="container">
      <div class="sidebar">
          <draggable v-model="patients" class="sidebar-upper">
              <input type="text" name="search" id="search" />
              <div v-for="patient in patients" v-bind:key="patient.id" class="patient-list">
                  {{patient.name}}
              </div>
          </draggable>
          <div class="sidebar-lower">
              <span>noti-1</span>
              <span>noti-2</span>
          </div>
      </div>
      <div class="calendar">
          <vue-cal 
            :time-from="7*60"
            :time-to="22*60"
            :time-step="60"
            active-view="week"
            :disable-views="['years', 'year', 'day']"
            locale="ko"
            :events="events"
          />
      </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/ko.js'
import 'vue-cal/dist/vuecal.css'
import draggable from 'vuedraggable'

export default {
    name: 'DoctorMain',
    components: {
        VueCal,
        draggable
    },
    data: () => ({
        patients: [
            {'name' : '유명현'},
            {'name' : '홍준식'}
        ],
        events: [
        {
        start: '2021-10-27 12:30',
        end: '2021-10-27 13:30',
        // You can also define event dates with Javascript Date objects:
        // start: new Date(2018, 11 - 1, 16, 10, 30),
        // end: new Date(2018, 11 - 1, 16, 11, 30),
        title: 'Doctor appointment',
        content: '<i class="v-icon material-icons">local_hospital</i>',
        class: 'health'
        }]
    })
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    width: 100%;
    min-height: 90vh;
    padding-top: 60px; //gnb 침범하는 문제 해결
    .sidebar {
        display: flex;
        flex-direction: column;
        width: 20%;
        padding: 5px 5px;
        border-right: 1px solid #000;
        .sidebar-upper {
            display: flex;
            flex-direction: column;
            height: 50%;
            .patient-list {
                display: flex;
                flex-direction: column;
            }
        }
        .sidebar-lower {
            display: flex;
            flex-direction: column;
        }
    }
    .calendar {
        width: 80%;
        padding: 5px 5px;
        .vuecal__title-bar {background-color: rgba(255, 102, 102, 0.9);}
        vue-cal {
            .vuecal__event {
                .health {
                    background-color: rgba(255, 102, 102, 0.9);
                    border: 1px solid rgb(235, 82, 82);
                    color: #fff;
                }            
            }
        }
    }
}
</style>