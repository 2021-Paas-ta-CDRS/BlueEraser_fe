<template>
  <div class="container">
      <div class="sidebar">
          <div class="patient-list">
              <input type="text" name="search" id="search" />
              <span>홍준식</span>
              <span>유명현</span>
          </div>
          <div class="notification">
              <span>noti-1</span>
              <span>noti-2</span>
          </div>
      </div>
      <div class="calendar">
          <kalendar :configuration="calendar_settings" :events.sync="events" />
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import PortalVue from "portal-vue";
Vue.use(PortalVue);
import { Kalendar } from 'kalendar-vue';

export default {
    name: 'Doctor_main',
    components: {
        Kalendar,
    },
    data: () => ({
        calendar_settings: {
        style: 'material_design',
        view_type: 'week',
        cell_height: 8,
        scrollToNow: true,
        start_day: new Date().toISOString(),
        read_only: false,
        day_starts_at: 8,
        day_ends_at: 22,
        overlap: true,
        hide_dates: [], // Spooky
        hide_days: [],
        past_event_creation: true
        },
        events: [
            {
                from: '2021-10-27T18:00:00Z',
                to: '2021-10-27T19:00:00Z',
                data: 'Event 1',
            },
        ],
    })
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    width : 100%;
    .sidebar {
        width: 20%;
        border-right: 1px solid #000;
        .patient-list {
            display: flex;
            flex-direction: column;
        }
    }
    .calendar {
        width : 80%;
        // kalendar height 수정
        .kalendar-wrapper {
            min-height: 100vh;
        }
    }
}
</style>