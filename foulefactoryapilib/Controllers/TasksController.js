/**
  *FouleFactoryApiLib
  *
  * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/14/2016
  */

'use strict';
angular.module('FouleFactoryApiLib').factory('TasksController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Validate task
         * @param {TaskValidationWriterServiceModel} task    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        updateTasksValidate : function(task, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/tasks";
            
            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "content-type" : "application/json; charset=utf-8",
                "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
            };

            //Remove null values
            APIHelper.cleanObject(task);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "PUT",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                body : task
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                var _strResult =_result.body;
            	_result = JSON.parse(_strResult);
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * Get task answer choices by task id
         * @param {int} id    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        getTasksGetAnswerChoices : function(id, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/tasks/{id}/taskAnswerChoices";
            
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
                var _strResult =_result.body;
            	_result = JSON.parse(_strResult);
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * Get task answer texts by task id
         * @param {int} id    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        getTasksGetAnswerTexts : function(id, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/tasks/{id}/taskAnswerTexts";
            
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
                var _strResult =_result.body;
            	_result = JSON.parse(_strResult);
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * Get task by id
         * @param {int} id    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        getTasksGet : function(id, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/tasks/{id}";
            
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
                var _strResult =_result.body;
            	_result = JSON.parse(_strResult);
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        }
    }
});