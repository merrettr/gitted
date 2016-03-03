
class GittedCollection extends Mongo.Collection {
  insert(doc, callback) {
    doc.id = doc.id.toString();
    const item = this.findOne({id: doc.id});

    if (item) {
      this.update(
        item._id,
        {$set: doc},
        {},
        error => (callback || (() => {}))(error, item._id)
      );
    } else {
      super.insert(doc, callback);
    }
  }
}

this.GittedCollection = GittedCollection;