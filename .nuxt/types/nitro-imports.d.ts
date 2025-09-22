declare global {
  const { appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, callNodeListener, clearResponseHeaders, clearSession, createApp, createAppEventHandler, createError, createEvent, createEventStream, createRouter, defaultContentType, defineEventHandler, defineLazyEventHandler, defineNodeListener, defineNodeMiddleware, defineRequestMiddleware, defineResponseMiddleware, defineWebSocket, defineWebSocketHandler, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeMiddleware, fromPlainHandler, fromWebHandler, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, isCorsOriginAllowed, isError, isEvent, isEventHandler, isMethod, isPreflightRequest, isStream, isWebResponse, lazyEventHandler, parseCookies, promisifyNodeListener, proxyRequest, readBody, readFormData, readMultipartFormData, readRawBody, readValidatedBody, removeResponseHeader, sanitizeStatusCode, sanitizeStatusMessage, sealSession, send, sendError, sendIterable, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, splitCookiesString, toEventHandler, toNodeListener, toPlainHandler, toWebHandler, toWebRequest, unsealSession, updateSession, useBase, useSession, writeEarlyHints }: typeof import('../../node_modules/h3')
  const { buildAssetsURL: __buildAssetsURL, publicAssetsURL: __publicAssetsURL }: typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/utils/paths')
  const { cachedEventHandler, cachedFunction, defineCachedEventHandler, defineCachedFunction }: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache')
  const { defineAppConfig }: typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/utils/config')
  const { defineNitroErrorHandler }: typeof import('../../node_modules/nitropack/dist/runtime/internal/error/utils')
  const { defineNitroPlugin, nitroPlugin }: typeof import('../../node_modules/nitropack/dist/runtime/internal/plugin')
  const { defineRenderHandler }: typeof import('../../node_modules/nitropack/dist/runtime/internal/renderer')
  const { defineRouteMeta }: typeof import('../../node_modules/nitropack/dist/runtime/internal/meta')
  const { defineTask, runTask }: typeof import('../../node_modules/nitropack/dist/runtime/internal/task')
  const { getRouteRules }: typeof import('../../node_modules/nitropack/dist/runtime/internal/route-rules')
  const { hubHooks, onHubReady }: typeof import('../../node_modules/@nuxthub/core/dist/runtime/base/server/utils/hooks')
  const { useAppConfig, useRuntimeConfig }: typeof import('../../node_modules/nitropack/dist/runtime/internal/config')
  const { useEvent }: typeof import('../../node_modules/nitropack/dist/runtime/internal/context')
  const { useNitroApp }: typeof import('../../node_modules/nitropack/dist/runtime/internal/app')
  const { useStorage }: typeof import('../../node_modules/nitropack/dist/runtime/internal/storage')
}
// for type re-export
declare global {
  // @ts-ignore
  export type { HubHooks } from '../../node_modules/@nuxthub/core/dist/runtime/base/server/utils/hooks.d'
  import('../../node_modules/@nuxthub/core/dist/runtime/base/server/utils/hooks.d')
}
export { useNitroApp } from 'nitropack/runtime/internal/app';
export { useRuntimeConfig, useAppConfig } from 'nitropack/runtime/internal/config';
export { defineNitroPlugin, nitroPlugin } from 'nitropack/runtime/internal/plugin';
export { defineCachedFunction, defineCachedEventHandler, cachedFunction, cachedEventHandler } from 'nitropack/runtime/internal/cache';
export { useStorage } from 'nitropack/runtime/internal/storage';
export { defineRenderHandler } from 'nitropack/runtime/internal/renderer';
export { defineRouteMeta } from 'nitropack/runtime/internal/meta';
export { getRouteRules } from 'nitropack/runtime/internal/route-rules';
export { useEvent } from 'nitropack/runtime/internal/context';
export { defineTask, runTask } from 'nitropack/runtime/internal/task';
export { defineNitroErrorHandler } from 'nitropack/runtime/internal/error/utils';
export { appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, callNodeListener, clearResponseHeaders, clearSession, createApp, createAppEventHandler, createError, createEvent, createEventStream, createRouter, defaultContentType, defineEventHandler, defineLazyEventHandler, defineNodeListener, defineNodeMiddleware, defineRequestMiddleware, defineResponseMiddleware, defineWebSocket, defineWebSocketHandler, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeMiddleware, fromPlainHandler, fromWebHandler, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, isCorsOriginAllowed, isError, isEvent, isEventHandler, isMethod, isPreflightRequest, isStream, isWebResponse, lazyEventHandler, parseCookies, promisifyNodeListener, proxyRequest, readBody, readFormData, readMultipartFormData, readRawBody, readValidatedBody, removeResponseHeader, sanitizeStatusCode, sanitizeStatusMessage, sealSession, send, sendError, sendIterable, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, splitCookiesString, toEventHandler, toNodeListener, toPlainHandler, toWebHandler, toWebRequest, unsealSession, updateSession, useBase, useSession, writeEarlyHints } from 'h3';
export { buildAssetsURL as __buildAssetsURL, publicAssetsURL as __publicAssetsURL } from '/root/dev/koishi-meme/node_modules/nuxt/dist/core/runtime/nitro/utils/paths';
export { defineAppConfig } from '/root/dev/koishi-meme/node_modules/nuxt/dist/core/runtime/nitro/utils/config';
export { hubHooks, onHubReady } from '/root/dev/koishi-meme/node_modules/@nuxthub/core/dist/runtime/base/server/utils/hooks';