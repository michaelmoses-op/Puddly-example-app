export default function BookRow(props) {
  return (
    <li class="book-row">
      <div class="book-main">
        <span class="book-title" data-puddly-id="title">
          {props.title}
        </span>
        <span class="book-author" data-puddly-id="author">
          {props.author}
        </span>
        <span class="book-status" data-puddly-id="status">
          {props.status}
        </span>
      </div>
      <p class="book-notes" data-puddly-id="notes">
        {props.notes}
      </p>
      <form
        data-puddly-rpc="book.update"
        data-puddly-reload="0"
        class="book-edit"
      >
        <input type="hidden" name="id" value={props.id} />
        <label>
          Status
          <select name="status">
            <option value="want">Want to read</option>
            <option value="reading">Reading</option>
            <option value="finished">Finished</option>
          </select>
        </label>
        <label>
          Notes
          <textarea name="notes" rows="2" placeholder="Update notes…"></textarea>
        </label>
        <div class="book-actions">
          <button type="submit">Save</button>
          <button
            type="button"
            data-puddly-rpc="book.delete"
            data-puddly-body={props.id}
            class="danger"
          >
            Remove
          </button>
        </div>
      </form>
    </li>
  );
}
