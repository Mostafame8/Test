<template>
  <div id="left-component">
    <transition name="fade">
      <div class="comp-wrapper">
        <div class="set-wrapper">
          <div class="set-name">
            coins
          </div>
          <div class="item-pad">
            <div class="badge-wrapper">
              <div class="draggable-set-name">cash</div>
              <div class="badge">99+</div>
            </div>
            <div class="draggble-silver-coin">
              <img
                src="../assets/draggable/coin-silver.png"
                alt="Silver Coin"
              />
            </div>
          </div>
          <div class="item-pad">
            <div class="badge-wrapper">
              <div class="draggable-set-name">time</div>
              <div class="badge">99+</div>
            </div>
            <div class="draggble-silver-coin">
              <img src="../assets/draggable/time.png" alt="Hour glass" />
            </div>
          </div>
          <div class="item-pad">
            <div class="badge-wrapper">
              <div class="draggable-set-name">satisfaction</div>
              <div class="badge">99+</div>
            </div>
            <div class="draggble-silver-coin">
              <img src="../assets/draggable/yellow.png" alt="Smile Face" />
            </div>
          </div>
        </div>
        <div class="set-wrapper-score">
          <div class="set-name">
            coins
          </div>
          <div class="item-pad-score">
            <div class="box box-success">
              <div class="box-wrapper">
                <div class="box-wrapper-data">
                  <img
                    src="../assets/defaults/double-arrow-green.svg"
                    alt="double arrow up"
                  />
                  <p>+10</p>
                </div>
                <div class="box-wrapper-text">
                  <p>risk</p>
                </div>
              </div>
            </div>
          </div>
          <div class="item-pad-score"></div>
          <div class="item-pad-score"></div>
          <div class="item-pad-score"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LeftComponent',
};
</script>

<style scoped>
#left-component {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  width: 164px;
  height: calc(100vh - 80px);
  background-color: white;
  z-index: 1;
  padding: 5px 5px;
}

.comp-wrapper {
  padding: 0 5px;
  margin-top: 10px;
}

.set-wrapper-score {
  margin-top: 20px;
  border-top: 1px solid #d3d6da;
  padding-top: 10px;
}

.set-name {
  font-family: arial narrow, serif;
  font-size: 16px;
  font-weight: bold;
  color: #526975;
  text-transform: capitalize;
  text-align: left;
}

.item-pad {
  background-color: #dfe3e6;
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 139px;
  margin-top: 10px;
}
.item-pad-score {
  background-color: #dfe3e6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 139px;
  margin-top: 10px;
}

.box {
  width: 88px;
  height: 40px;
  background-color: black;
  border-radius: 2px;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.48));
}

.box-success {
  border: 2px solid #008237;
}
.box-failure {
  border: 2px solid #e50037;
}

.draggable-set-name {
  font-family: arial narrow, serif;
  font-size: 12px;
  font-weight: normal;
  color: #526975;
  display: flex;
  text-transform: capitalize;
  align-self: baseline;
}

.badge {
  font-family: arial narrow, serif;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  border: #d3d6da 1px solid;
  padding: 1px 6px;
  min-width: 32px;
  background-color: #e50037;
  display: flex;
  align-self: baseline;
}

.badge-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 6px;
  align-items: center;
}

.draggble-silver-coin {
  display: flex;
  align-items: center;
  margin: 0 6px;
}

.draggble-silver-coin img {
  height: 60px;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.41));
}

.box-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5px;
}

.box-wrapper-data {
  display: flex;
  justify-content: center;
  max-height: 30px;
}
.box-wrapper-data p {
  font-size: 27px;
  font-weight: bold;
  color: white;
}

.box-wrapper-text {
  display: flex;
  max-height: 10px;
}
.box-wrapper-text p {
  font-size: 10px;
}
</style>
