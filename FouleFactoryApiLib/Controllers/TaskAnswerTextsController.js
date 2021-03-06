/**
  *FouleFactoryApiLib
  *
  * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/16/2016
  */

'use strict';
angular.module('FouleFactoryApiLib').factory('TaskAnswerTextsController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Get task answer text by id
         * @param {int} id    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        getTaskAnswerTextsGet : function(id, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/taskAnswerTexts/{id}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "id" : id
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
            };

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "GET",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                var _result =_result.body;
            	
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        }
    }
});