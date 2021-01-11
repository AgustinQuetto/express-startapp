class ExampleService {
    constructor(exampleModel) {
        this.exampleModel = exampleModel;
    }

    save(data = {}) {
        const example = new this.exampleModel(data);

        return example.save({ checkKeys: false });
    }

    find(query, select = "", range = {}, options = {}) {
        options = { ...options, ...{ lean: true } };
        const result = this.exampleModel.find(query, select, options);
        if (range.limit) result.limit(limit);
        if (range.skip) result.skip(skip);
        return result.exec();
    }

    findOne(query, select = "", options = {}) {
        options = { ...options, ...{ lean: true } };
        const result = this.exampleModel.findOne(query, select, options);
        return result.exec();
    }

    findById(_id, select = "", options = {}) {
        options = { ...options, ...{ lean: true } };
        const result = this.exampleModel.findById(_id, select, options);
        return result.exec();
    }

    updateOneById(_id, data = {}, options = {}) {
        options = {
            ...options,
            ...{ lean: true, new: true },
        };
        const updated = this.exampleModel.findOneAndUpdate(_id, data, options);
        return updated.exec();
    }

    replaceOneById(_id, data = {}, options = {}) {
        options = {
            ...options,
            ...{ lean: true, new: true },
        };
        const updated = this.exampleModel.findOneAndReplace(_id, data, options);
        return updated.exec();
    }

    deleteOne(query) {
        const result = this.exampleModel.deleteOne(query);
        return result.exec();
    }

    deleteById(_id) {
        const result = this.exampleModel.deleteOne({ _id: _id });
        return result.exec();
    }
}

module.exports = ExampleService;
