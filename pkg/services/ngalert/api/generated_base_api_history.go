/*Package api contains base API implementation of unified alerting
 *
 *Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 *
 *Do not manually edit these files, please find ngalert/api/swagger-codegen/ for commands on how to generate them.
 */
package api

import (
	"net/http"

	"github.com/grafana/grafana/pkg/api/response"
	"github.com/grafana/grafana/pkg/api/routing"
	"github.com/grafana/grafana/pkg/middleware"
	"github.com/grafana/grafana/pkg/models"
	"github.com/grafana/grafana/pkg/services/ngalert/metrics"
)

type HistoryApi interface {
	RouteGetStateHistory(*models.ReqContext) response.Response
	RouteGetStateHistory_1(*models.ReqContext) response.Response
}

func (f *HistoryApiHandler) RouteGetStateHistory(ctx *models.ReqContext) response.Response {
	return f.handleRouteGetStateHistory(ctx)
}
func (f *HistoryApiHandler) RouteGetStateHistory_1(ctx *models.ReqContext) response.Response {
	return f.handleRouteGetStateHistory_1(ctx)
}

func (api *API) RegisterHistoryApiEndpoints(srv HistoryApi, m *metrics.API) {
	api.RouteRegister.Group("", func(group routing.RouteRegister) {
		group.Get(
			toMacaronPath("/api/ruler/grafana/states"),
			api.authorize(http.MethodGet, "/api/ruler/grafana/states"),
			metrics.Instrument(
				http.MethodGet,
				"/api/ruler/grafana/states",
				srv.RouteGetStateHistory,
				m,
			),
		)
		group.Get(
			toMacaronPath("/api/ruler/grafana/states/{RuleUID}"),
			api.authorize(http.MethodGet, "/api/ruler/grafana/states/{RuleUID}"),
			metrics.Instrument(
				http.MethodGet,
				"/api/ruler/grafana/states/{RuleUID}",
				srv.RouteGetStateHistory_1,
				m,
			),
		)
	}, middleware.ReqSignedIn)
}
