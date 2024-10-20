



export class UpdateTodoDto {
  private constructor(
    public readonly id: number,
    public readonly text?: string,
    public readonly completedAt?: Date
  ) {}

  /**
   * Returns an object containing the values of the properties
   * that have been set. If a property hasn't been set, it won't
   * appear in the returned object.
   */
  get values() {
    const returnObj: {[key: string]: any} = {};

    if(this.text) returnObj.text = this.text;
    if(this.completedAt) returnObj.completedAt = this.completedAt;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateTodoDto?] {

    const { id, text, completedAt } = props;

    let newCompletedAt = completedAt;

    if(!id || isNaN(id)) return ['ID property is required and must be a number', undefined];

    if (!text) return ["Text property is required", undefined];

    if(completedAt)
    {
        newCompletedAt = new Date(completedAt);

        if(newCompletedAt.toString() === "Invalid Date")
        {
            return ['CompleteAt property must be a valid date', undefined];
        }
    }

    return [undefined, new UpdateTodoDto(id, text, newCompletedAt)];
  }
}





