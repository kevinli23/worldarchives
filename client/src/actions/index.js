import {
  ADD_ARTICLE,
  SET_START_DATE,
  SET_END_DATE,
  SET_SOURCES,
  SET_SELECTED_SOURCES,
  SET_AUTHENTICATED,
  CLEAR_ARTICLES,
} from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function setStartDate(payload) {
  return { type: SET_START_DATE, payload };
}

export function setEndDate(payload) {
  return { type: SET_END_DATE, payload };
}

export function setSources(payload) {
  return { type: SET_SOURCES, payload };
}

export function setSelectedSources(payload) {
  return { type: SET_SELECTED_SOURCES, payload };
}

export function setAuthenticated(payload) {
  return { type: SET_AUTHENTICATED, payload };
}

export function clearArticles(payload) {
  return { type: CLEAR_ARTICLES, payload };
}
