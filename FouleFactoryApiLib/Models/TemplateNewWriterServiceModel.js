/**
 *FouleFactoryApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/16/2016
 */
/**
 * Creates a instance of TemplateNewWriterServiceModel
 *
 * @constructor
 */

angular.module('FouleFactoryApiLib').factory('TemplateNewWriterServiceModel',function(BaseModel,TemplateInstructionWriterServiceModel,TemplateColumnWriterServiceModel,TemplateQuestionWriterServiceModel){
	var TemplateNewWriterServiceModel = function(obj) {
		if(!obj){
						this.idProjectType = null;     
    				this.title = null;     
    				this.description = null;     
    				this.instructions = null;     
    				this.columns = null;     
    				this.questions = null;     
    								//Append to variable dictionary
    this._variableDict['idProjectType'] = 'IdProjectType';
    this._variableDict['title'] = 'Title';
    this._variableDict['description'] = 'Description';
    this._variableDict['instructions'] = 'Instructions';
    this._variableDict['columns'] = 'Columns';
    this._variableDict['questions'] = 'Questions';
    					
		}
		else
		{
					this.idProjectType = obj.IdProjectType;
    		this.title = obj.Title;
    		this.description = obj.Description;
    		this.instructions = obj.Instructions.map(function(model){
    			return new TemplateInstructionWriterServiceModel(model);
    		});
    		this.columns = obj.Columns.map(function(model){
    			return new TemplateColumnWriterServiceModel(model);
    		});
    		this.questions = obj.Questions.map(function(model){
    			return new TemplateQuestionWriterServiceModel(model);
    		});
    //Append to variable dictionary
    this._variableDict['idProjectType'] = 'IdProjectType';
    this._variableDict['title'] = 'Title';
    this._variableDict['description'] = 'Description';
    this._variableDict['instructions'] = 'Instructions';
    this._variableDict['columns'] = 'Columns';
    this._variableDict['questions'] = 'Questions';
 
		}
	}

	TemplateNewWriterServiceModel.prototype = new BaseModel();
	TemplateNewWriterServiceModel.prototype.constructor = TemplateNewWriterServiceModel;

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {int}
	 */
	TemplateNewWriterServiceModel.prototype.getIdProjectType = function() {
		return this.idProjectType;
	};

	/**
	 * Setter for IdProjectType
	 * 
	 * @param {int} value 
	 */
	TemplateNewWriterServiceModel.prototype.setIdProjectType = function(value) {
		this.idProjectType = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {string}
	 */
	TemplateNewWriterServiceModel.prototype.getTitle = function() {
		return this.title;
	};

	/**
	 * Setter for Title
	 * 
	 * @param {string} value 
	 */
	TemplateNewWriterServiceModel.prototype.setTitle = function(value) {
		this.title = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {string}
	 */
	TemplateNewWriterServiceModel.prototype.getDescription = function() {
		return this.description;
	};

	/**
	 * Setter for Description
	 * 
	 * @param {string} value 
	 */
	TemplateNewWriterServiceModel.prototype.setDescription = function(value) {
		this.description = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {array}
	 */
	TemplateNewWriterServiceModel.prototype.getInstructions = function() {
		return this.instructions;
	};

	/**
	 * Setter for Instructions
	 * 
	 * @param {array} value 
	 */
	TemplateNewWriterServiceModel.prototype.setInstructions = function(value) {
		this.instructions = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {array}
	 */
	TemplateNewWriterServiceModel.prototype.getColumns = function() {
		return this.columns;
	};

	/**
	 * Setter for Columns
	 * 
	 * @param {array} value 
	 */
	TemplateNewWriterServiceModel.prototype.setColumns = function(value) {
		this.columns = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {array}
	 */
	TemplateNewWriterServiceModel.prototype.getQuestions = function() {
		return this.questions;
	};

	/**
	 * Setter for Questions
	 * 
	 * @param {array} value 
	 */
	TemplateNewWriterServiceModel.prototype.setQuestions = function(value) {
		this.questions = value;
	};

	
	return TemplateNewWriterServiceModel;
});