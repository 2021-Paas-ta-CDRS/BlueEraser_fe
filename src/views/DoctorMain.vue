<template>
  <div class="container">
      <div class="sidebar">
          <div class="sidebar-upper">
              <vs-input id="search-patient" v-on:input="searchPatient" v-model="searchName" placeholder="환자 검색" />
              <div id="patient-list">
                <div class="external-event"
                    v-for="(item, i) in draggables"
                    :key="i"
                    draggable="true"
                    @dragstart="onEventDragStart($event, item)">
                    <strong>{{ item.title }}</strong>
                    ({{ item.duration ? `${item.duration} min` : 'no duration' }})
                    <div>{{ item.content }}</div>
                </div>
              </div>
              <div id="filtered-patient-list">
                <div class="external-event"
                    v-for="(item, i) in filteredDraggables"
                    :key="i"
                    draggable="true"
                    @dragstart="onEventDragStart($event, item)">
                    <strong>{{ item.title }}</strong>
                    ({{ item.duration ? `${item.duration} min` : 'no duration' }})
                    <div>{{ item.content }}</div>
                </div>
              </div>
          </div>
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
            :snap-to-time="30"
            active-view="week"
            :disable-views="['years', 'year', 'day']"
            locale="ko"
            :events="events"
            editable-events
            @event-drop="onEventDrop"
          />
      </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/ko.js'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/drag-and-drop.js'
// import draggable from 'vuedraggable'

export default {
    name: 'DoctorMain',
    components: {
        VueCal,
        // draggable
    },
    data: () => ({
        searchName:"",
        patients: [
            /*
            {
            'name' : '유명현',
            'packageName' : '진로상담',
            'packageDuration' : 60,
            },
            */
            {
                'name' : '유명현',
                'packageName' : '진로상담',
                'packageDuration' : 60,
            },
            {
                'name' : '홍준식',
                'packageName' : '심리상담',
                'packageDuration' : 60,
            },
            {
                'name' : '킹명현',
                'packageName' : '전과상담',
                'packageDuration' : 30,
            },
            {
                'name' : '엄준식',
                'packageName' : '전과상담',
                'packageDuration' : 60,
            },
            {
                'name' : '윤준석',
                'packageName' : '심리상담',
                'packageDuration' : 60,
            }
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
            }
        ],
        draggables: [
            // The id (or however you name it), will help you find which event to delete
            // from the callback triggered on drop into Vue Cal.
            // No defined duration here: will default to 2 hours.
            // {
            // id: 6,
            // title: 'Ext. Event 3',
            // content: 'content 3'    
            // }
        ],
        filteredDraggables: [
            // 검색 값과 일치하는 환자들
        ]
    }),
    computed: {
    },
    methods: {

        /*
        * loadPationts()
        * Todo : 1번 기능 구현
        * 기능 : 1. API에서 의사의 패키지를 구독한 환자들의 리스트를 불러와 patients array에 추가합니다. (구현해야함)
        *       2. drag & drop을 할 때 사용하는 draggables array에 환자들을 추가합니다.
        * Post : 1. Draggables array에 환자들 목록이 추가되어 drag & drop을 할 수 있게 됩니다.
        */
        loadPatients() {
            for (let i = 0; i < this.patients.length; i++ ) {
                var patient = this.patients[i];
                var id = i;
                var name = patient.name;
                var content = patient.packageName;
                var duration = patient.packageDuration;

                this.addNewDraggables(id, name, content, duration);
                this.id++;
            }
            document.getElementById("filtered-patient-list").style.display="none";
        },

        /*
        * addNewDraggables(순서, 환자명, 구독중인 패키지명, 상담시간(분 단위) )
        * 기능 : Draggables array에 환자의 정보를(환자 성명, 패키지명, 상담시간) 추가합니다.
        */
        addNewDraggables(id, name, content, duration) {
            var newPatient = {
                id: id,
                title: name,
                content: content,
                duration: duration
            };
            this.draggables.push(newPatient);
        },

        /*vue-cal drag & drop 관련 함수입니다.*/
        onEventDragStart (e, draggable) {
            // Passing the event's data to Vue Cal through the DataTransfer object.
            e.dataTransfer.setData('event', JSON.stringify(draggable))
            e.dataTransfer.setData('cursor-grab-at', e.offsetY)
        },
        // The 3 parameters are destructured from the passed $event in @event-drop="onEventDrop".
        // `event` is the final event as Vue Cal understands it.
        // `originalEvent` is the event that was dragged into Vue Cal, it can come from the same
        //  Vue Cal instance, another one, or an external source.
        // `external` is a boolean that lets you know if the event is not coming from any Vue Cal.

        /*vue-cal drag & drop 관련 함수입니다.*/
        onEventDrop ({ event, originalEvent, external }) {
        // If the event is external, delete it from the data source on drop into Vue Cal.
        // If the event comes from another Vue Cal instance, it will be deleted automatically in there.
            if (event != "") {
                if (external) {
                const extEventToDeletePos = this.draggables.findIndex(item => item.id === originalEvent.id)
                if (extEventToDeletePos > -1) return //this.draggables.splice(extEventToDeletePos, 1)
                }
            }
        },

        /*
        * searchPatient()
        * 기능 : 입력한 단어가 포함된 환자 리스트를 보여줍니다.
        * 예시 : searchName이 '엄'일때 환자 리스트 중 '엄'이 포함된 이름을 가진 환자가 표시됨
        * */
        searchPatient() {
            if (this.searchName == "") {
                document.getElementById("patient-list").style.display="block";
                document.getElementById("filtered-patient-list").style.display="none";
            }
            else {
                var foundPatients = [];
                for (var i = 0; i < this.draggables.length; i++) {
                    var draggable = this.draggables[i];
                    console.log(draggable);
                    if (draggable['title'].indexOf(this.searchName) != -1) {
                        foundPatients.push(draggable); 
                    }
                }
                this.filteredDraggables = foundPatients;
                document.getElementById("patient-list").style.display="none";
                document.getElementById("filtered-patient-list").style.display="block";
            }
        }
    },
    mounted() {
        /*자동으로 Patients를 db 서버에서 불러와 로드합니다.*/
        this.loadPatients()
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    width: 100%;
    min-height: 90vh;
    padding-top: 44px; //gnb 침범하는 문제 해결
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
            #search-patient {
                margin-bottom: 10px;
            }
            .external-event {
                background-color: #C5D6FF;
                margin-bottom: 5px;
                padding: 2px 5px;
                border-radius: 5px;
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