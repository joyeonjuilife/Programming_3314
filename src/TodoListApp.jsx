function TodoListApp() {
  return (
    <div>
      <h1> DON'T THINK, JUST DO IT.</h1>

      <form>
        <input type="text"/>
          <button>ADD</button>
          <ul>
            <li>
              <input type="checkbox" id="chk-1"/>
              <label htmlFor="chk-1">think</label>
              <button>✏️</button>
              <button>❌</button>
            </li>
          </ul>
      </form>
    </div>
  );
}

export default TodoListApp;
