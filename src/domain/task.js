var Task = /** @class */ (function () {
    function Task(id, title, description) {
        if (id === void 0) { id = null; }
        this._id = id;
        this._title = title;
        this._description = description;
    }
    Task.prototype.getTitle = function () {
        return this._title;
    };
    Task.prototype.getDescription = function () {
        return this._description;
    };
    return Task;
}());
