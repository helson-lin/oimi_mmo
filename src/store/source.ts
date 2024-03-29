import { defineStore } from 'pinia'
import type { Movie } from "../api/source"
// import { useRouter } from 'vue-router'
interface SourceState {
  BASEURL: string;
  t: number;
  pageNo: number;
  wd: string;
  list: Movie[];
}
// const router = useRouter()
const useSource = defineStore({
  id: 'source',
  state: (): SourceState => ({
    BASEURL: '',
    t: 0,
    pageNo: 1,
    wd: '',
    list: [],
  }),
  actions: {
    /**
     * 设置默认的地址
     * @date 2023/3/24 - 13:06:56
     * @param {string} val
     */
    setBaseUrl(val: string) {
      this.BASEURL = val
    },
    setT(val: number) {
      this.t = val
    },
    setWd(val: string) {
      this.wd = val
    },
    setPage(val: number) {
      this.pageNo = val
    },
    setData(val: Movie[]) {
      this.list = val
    }
  },
  getters: {
    getVodParams(state: SourceState) {
      return {
        t: state.t,
        pg: state.pageNo
      }
    },
    getterT(state: SourceState) {
      return state.t
    },
    getterList(state: SourceState) {
      return state.list || [];
    }
  },
})

export default useSource