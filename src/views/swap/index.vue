<template>
  <div class="swap">
    <h2 class="title">Swap</h2>
    <div class="from">
      <p class="balance">
        <span class="tip">From</span>
        <span class="total" v-if="from.total">Balance:{{ from.total }}</span>
      </p>
      <p class="currency">
        <input
          type="number"
          placeholder="0.0"
          class="local"
          @change="fromChange"
          @input="fromInput"
          v-model="from.local"
        />
        <select
          class="list"
          v-model="fromCurrencySelected"
          @change="fromGetCurrencySelected"
        >
          <option
            :key="index"
            :value="currency.id"
            v-for="(currency, index) in fromCurrencyList"
          >
            {{ currency.id.trim() }}
          </option>
        </select>
      </p>
    </div>
    <p class="change">
      <img
        @click="changeSwap"
        class="change-img"
        src="../../assets/img/swap/swap.png"
        alt=""
      />
    </p>
    <div class="to">
      <p class="balance">
        <span class="tip">To（Estimate）</span>
        <span class="total" v-if="to.total">Balance:{{ to.total }}</span>
      </p>
      <p class="currency">
        <input
          type="number"
          placeholder="0.0"
          class="local"
          v-model="to.local"
          @change="toChange"
          @input="toInput"
        />
        <select
          class="list"
          v-model="toCurrencySelected"
          @change="toGetCurrencySelected"
        >
          <option
            :key="index"
            :value="currency.id"
            v-for="(currency, index) in toCurrencyList"
          >
            {{ currency.id.trim() }}
          </option>
        </select>
      </p>
    </div>
    <p class="submit-button"><span>Swap</span></p>
  </div>
</template>

<script>
export default {
  name: "Swap",
  data() {
    return {
      fromCurrencySelected: "ETH",
      toCurrencySelected: "USDT",
      currencyList: [
        {
          id: "USDT",
          total: 123.12345678,
        },
        {
          id: "ETH",
          total: 18,
        },
        {
          id: "BTC",
          total: 213,
        },
        {
          id: "DOT",
          total: 23424,
        },
      ],
      from: {},
      to: {},
    };
  },
  components: {},
  created() {
    this.fromGetCurrencySelected();
  },
  computed: {
    fromCurrencyList() {
      const currencyList = JSON.parse(JSON.stringify(this.currencyList));
      return currencyList.filter((to) => to.id !== this.toCurrencySelected);
    },
    toCurrencyList() {
      const fromCurrencyList = JSON.parse(JSON.stringify(this.currencyList));
      return fromCurrencyList.filter((from) => {
        if (this.fromCurrencySelected !== from.id) {
          from.total = 0;
          return from;
        }
      });
    },
  },
  methods: {
    toGetCurrencySelected() {
      this.to = this.toCurrencyList.filter(
        (to) => to.id === this.toCurrencySelected
      )[0];
      const id = this.to.id;
      this.toCurrencySelected = id;
    },
    fromGetCurrencySelected() {
      this.from = this.fromCurrencyList.filter(
        (from) => from.id === this.fromCurrencySelected
      )[0];
    },
    toInput() {
      const local = +this.to.local;
      const total = +this.to.total;
      if (local > total) {
        this.to.local = this.to.total;
      }
    },
    fromInput() {
      const local = +this.from.local;
      const total = +this.from.total;
      if (local > total) {
        this.from.local = this.from.total;
      }
    },
    toChange(){

    },
    fromChange(){

    },
    changeSwap() {
      const to = JSON.parse(JSON.stringify(this.to));
      const from = JSON.parse(JSON.stringify(this.from));
      const fromCurrencyList = JSON.parse(
        JSON.stringify(this.fromCurrencyList)
      );
      const toCurrencyList = JSON.parse(JSON.stringify(this.toCurrencyList));
      const toCurrencySelected = this.toCurrencySelected;
      const fromCurrencySelected = this.fromCurrencySelected;
      this.to = from;
      this.from = to;
      this.toCurrencySelected = fromCurrencySelected;
      this.fromCurrencySelected = toCurrencySelected;
      this.fromCurrencyList = toCurrencyList;
      this.toCurrencyList = fromCurrencyList;
    },
    submit() {},
  },
};
</script>

<style lang="scss" scoped>
.swap {
  width: 600px;
  margin: 80px auto;
  border: 1px solid #ddd;
  background: #fff;
  .title {
    text-align: center;
    line-height: 120px;
  }
  .from,
  .to {
    border: 1px solid #ddd;
    width: 380px;
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 40px;
    .balance {
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tip {
      }
      .total {
      }
    }
    .currency {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      .local {
        border: none;
        outline: none;
        color: #000;
        ::-webkit-input-placeholder {
          color: #bbb;
        }
      }
      .list {
        border: none;
        outline: none;
      }
    }
  }
  .change {
    margin: 2px auto;
    text-align: center;
    .change-img {
      cursor: pointer;
      height: 20px;
    }
  }
  .submit-button {
    width: 380px;
    margin: 80px auto;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background: #249cd3;
  }
}
</style>
