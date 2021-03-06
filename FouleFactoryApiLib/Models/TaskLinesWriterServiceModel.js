/**
 *FouleFactoryApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/16/2016
 */
/**
 * Creates a instance of TaskLinesWriterServiceModel
 *
 * @constructor
 */

angular.module('FouleFactoryApiLib').factory('TaskLinesWriterServiceModel',function(BaseModel){
	var TaskLinesWriterServiceModel = function(obj) {
		if(!obj){
						this.idProject = null;     
    				this.taskColumns = null;     
    								//Append to variable dictionary
    this._variableDict['idProject'] = 'IdProject';
    this._variableDict['taskColumns'] = 'TaskColumns';
    					
		}
		else
		{
					this.idProject = obj.IdProject;
    		this.taskColumns = obj.TaskColumns;
    //Append to variable dictionary
    this._variableDict['idProject'] = 'IdProject';
    this._variableDict['taskColumns'] = 'TaskColumns';
 
		}
	}

	TaskLinesWriterServiceModel.prototype = new BaseModel();
	TaskLinesWriterServiceModel.prototype.constructor = TaskLinesWriterServiceModel;

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {int}
	 */
	TaskLinesWriterServiceModel.prototype.getIdProject = function() {
		return this.idProject;
	};

	/**
	 * Setter for IdProject
	 * 
	 * @param {int} value 
	 */
	TaskLinesWriterServiceModel.prototype.setIdProject = function(value) {
		this.idProject = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {array}
	 */
	TaskLinesWriterServiceModel.prototype.getTaskColumns = function() {
		return this.taskColumns;
	};

	/**
	 * Setter for TaskColumns
	 * 
	 * @param {array} value 
	 */
	TaskLinesWriterServiceModel.prototype.setTaskColumns = function(value) {
		this.taskColumns = value;
	};

	
	return TaskLinesWriterServiceModel;
});