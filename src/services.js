let services = [
  { id:1, name:"Web Dev", provider:"Alice", price:1500 },
  { id:2, name:"UI Design", provider:"Bob", price:2000 },
  { id:3, name:"SEO", provider:"Carol", price:1200 }
];

module.exports = {
  getAll: () => services,
  add: (svc) => {
    const nextId = services.length ? services[services.length-1].id+1 : 1;
    const newSvc = { id:nextId, ...svc };
    services.push(newSvc);
    return newSvc;
  }
};
